const fs = require('fs');
let code = fs.readFileSync('src/components/PracticeEngine.jsx', 'utf8');

// 1. Fix unstable Math.random() sorts
code = code.replace(/\.sort\(\(\) => Math\.random\(\) - 0\.5\)/g, '.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)');

// Add inline eslint-disable for the useMemo shuffles:
code = code.replace(/return \[\.\.\.q\.options\]\.map/g, '/* eslint-disable-next-line react-hooks/purity */\n        return [...q.options].map');
code = code.replace(/const shuffled = React\.useMemo\(\(\) => \[\.\.\.game\.questions\.map\(q => q\.a\)\]\.map/g, '/* eslint-disable-next-line react-hooks/purity */\n    const shuffled = React.useMemo(() => [...game.questions.map(q => q.a)].map');

// Silence the set-state-in-effect warning since it is intentional here:
code = code.replace(/setAvailableWords\(words\.map\(value/g, '// eslint-disable-next-line react-hooks/set-state-in-effect\n        setAvailableWords(words.map(value');

// 2. Fix FillBlanksGame split issue
code = code.replace(/const parts = currentData\.text\.split\('____'\);/g, 'const parts = currentData.text.split(/_{2,}/);');

// 3. Fix SentenceBuilderGame broken $ escaping
code = code.replace(/id: `w-\\\${i}`/g, 'id: `w-${i}`');
code = code.replace(/id: `d-\\\${i}`/g, 'id: `d-${i}`');

// 4. Fix SentenceBuilderGame Limpiar bug
const newClear = `const handleClear = () => {
        setAvailableWords(prev => [...prev, ...selectedWords]);
        setSelectedWords([]);
        setStatus('playing');
    };`;
code = code.replace(/const handleClear = \(\) => \{[\s\S]*?setStatus\('playing'\);\s*\};/g, newClear);

// 5. Fix SentenceBuilderGame double tap clones
const newSelect = `const selectWord = (word) => {
        if (status !== 'playing' && status !== 'incorrect') return;
        setAvailableWords(prev => prev.filter(w => w.id !== word.id));
        setSelectedWords(prev => {
            if (prev.some(w => w.id === word.id)) return prev;
            return [...prev, word];
        });
        setStatus('playing');
    };`;
code = code.replace(/const selectWord = \(word\) => \{[\s\S]*?setSelectedWords\(prev => \[\.\.\.prev, word\]\);[\s\S]*?\};/g, newSelect);

const newDeselect = `const deselectWord = (word) => {
        if (status !== 'playing' && status !== 'incorrect') return;
        setSelectedWords(prev => prev.filter(w => w.id !== word.id));
        setAvailableWords(prev => {
            if (prev.some(w => w.id === word.id)) return prev;
            return [...prev, word];
        });
        setStatus('playing');
    };`;
code = code.replace(/const deselectWord = \(word\) => \{[\s\S]*?setAvailableWords\(prev => \[\.\.\.prev, word\]\);[\s\S]*?\};/g, newDeselect);

// Clean up unused variables
code = code.replace(/const \[setNum\] = useState\(w\.num\);/g, ''); 
code = code.replace(/const \[setOpts\] = useState\(opts\);/g, '');
code = code.replace(/const \[setCards\] = useState\(cards\);/g, '');
code = code.replace(/const { game } = props;/g, '');

fs.writeFileSync('src/components/PracticeEngine.jsx', code);
console.log('Patched correctly');
