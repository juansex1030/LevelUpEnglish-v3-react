const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const fixTopics = [1, 2, 3, 4, 5];

fixTopics.forEach(id => {
    const topic = topics.find(t => t.id === id);
    if (!topic) return;

    // Replace all speaker buttons with speaker icons globally for consistency
    topic.theory = topic.theory.replace(/<button[^>]+data-audio="([^"]+)"[^>]*>🔊<\/button>/g, 
        '<i class="bi bi-volume-up text-primary cursor-pointer" data-audio="$1" style="font-size: 1.2rem; cursor: pointer;"></i>');
    
    // Fix for Topic 3 symbols specifically (ensuring they have the icon and data-audio)
    if (id === 3) {
        topic.theory = topic.theory.replace(/<strong>@<\/strong> \(At\) <i class="bi bi-volume-up[^>]*><\/i>/g, 
            '<strong>@</strong> (At) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="At symbol" style="font-size: 1.2rem; cursor: pointer;"></i>');
        topic.theory = topic.theory.replace(/<strong>\.<\/strong> \(Dot\) <i class="bi bi-volume-up[^>]*><\/i>/g, 
            '<strong>.</strong> (Dot) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Dot" style="font-size: 1.2rem; cursor: pointer;"></i>');
        topic.theory = topic.theory.replace(/<strong>-<\/strong> \(Hyphen\) <i class="bi bi-volume-up[^>]*><\/i>/g, 
            '<strong>-</strong> (Hyphen) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Hyphen" style="font-size: 1.2rem; cursor: pointer;"></i>');
        topic.theory = topic.theory.replace(/<strong>_<\/strong> \(Underscore\) <i class="bi bi-volume-up[^>]*><\/i>/g, 
            '<strong>_</strong> (Underscore) <i class="bi bi-volume-up text-primary cursor-pointer" data-audio="Underscore" style="font-size: 1.2rem; cursor: pointer;"></i>');
    }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('Topics 1-5 updated to ICON-BASED audio for consistency.');
