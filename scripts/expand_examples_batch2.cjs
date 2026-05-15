const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../backend/data/topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const batchUpdates = {
  16: {
    moreExamples: `
      <li>📝 On <strong>Monday</strong> morning. &rarr; 🌅📅 [Time of day].</li>
      <li>📝 In the <strong>winter</strong>. &rarr; ❄️ [Season].</li>
      <li>📝 Every <strong>Sunday</strong>. &rarr; ⛪ [Frequency].</li>
      <li>📝 Since <strong>January</strong>. &rarr; 📅 [Starting point].</li>`
  },
  17: {
    moreExamples: `
      <li>📝 <strong>At</strong> noon. &rarr; 🕛 [Specific point].</li>
      <li>📝 <strong>On</strong> Christmas. &rarr; 🎄 [Specific day].</li>
      <li>📝 <strong>In</strong> the future. &rarr; 🚀 [Period].</li>
      <li>📝 <strong>At</strong> the same time. &rarr; 👯‍♂️ [Simultaneous].</li>`
  },
  18: {
    moreExamples: `
      <li>📝 <strong>Above</strong> the door. &rarr; ⬆️🚪 [Higher position].</li>
      <li>📝 <strong>Behind</strong> the curtain. &rarr; 🎭 [Hidden].</li>
      <li>📝 <strong>In front of</strong> the shop. &rarr; 🏪 [Position].</li>
      <li>📝 <strong>Far from</strong> here. &rarr; 🗺️ [Distance].</li>`
  },
  19: {
    moreExamples: `
      <li>📝 I <strong>study</strong> English. &rarr; 📖 [Habit].</li>
      <li>📝 Water <strong>boils</strong> at 100°C. &rarr; 🌡️ [Fact].</li>
      <li>📝 They <strong>play</strong> soccer. &rarr; ⚽ [Activity].</li>
      <li>📝 She <strong>travels</strong> often. &rarr; ✈️ [Routine].</li>`
  },
  20: {
    moreExamples: `
      <li>📝 I <strong>don't like</strong> fish. &rarr; 🐟🚫 [Preference].</li>
      <li>📝 <strong>Does he play</strong> guitar? &rarr; 🎸 [Skill question].</li>
      <li>📝 We <strong>don't watch</strong> TV. &rarr; 📺🚫 [Negative habit].</li>
      <li>📝 <strong>Do they live</strong> here? &rarr; 🏠 [Location question].</li>`
  },
  21: {
    moreExamples: `
      <li>📝 I <strong>usually</strong> sleep early. &rarr; 💤 [80%].</li>
      <li>📝 She <strong>rarely</strong> cries. &rarr; 😢 [10%].</li>
      <li>📝 We <strong>often</strong> walk. &rarr; 🚶‍♂️ [70%].</li>
      <li>📝 He <strong>hardly ever</strong> eats out. &rarr; 🍔🚫 [5%].</li>`
  },
  22: {
    moreExamples: `
      <li>📝 I <strong>can</strong> speak French. &rarr; 🇫🇷 [Language skill].</li>
      <li>📝 She <strong>can't</strong> cook. &rarr; 🍳🚫 [No ability].</li>
      <li>📝 <strong>Can they</strong> run fast? &rarr; 🏃‍♂️ [Physical ability].</li>
      <li>📝 You <strong>can't</strong> enter here. &rarr; 🚫 [Prohibition].</li>`
  },
  23: {
    moreExamples: `
      <li>📝 <strong>There is</strong> a museum. &rarr; 🏛️ [Singular existence].</li>
      <li>📝 <strong>There are</strong> many trees. &rarr; 🌳🌳 [Plural existence].</li>
      <li>📝 <strong>Is there</strong> a pharmacy? &rarr; 💊 [Question].</li>
      <li>📝 <strong>There aren't</strong> any eggs. &rarr; 🥚🚫 [Negative plural].</li>`
  },
  24: {
    moreExamples: `
      <li>📝 <strong>Fast</strong> / <strong>Slow</strong>. &rarr; 🏎️ / 🐢</li>
      <li>📝 <strong>Happy</strong> / <strong>Sad</strong>. &rarr; 😊 / 😢</li>
      <li>📝 <strong>Easy</strong> / <strong>Difficult</strong>. &rarr; ✅ / ❌</li>
      <li>📝 <strong>Clean</strong> / <strong>Dirty</strong>. &rarr; ✨ / 💩</li>`
  },
  25: {
    moreExamples: `
      <li>📝 I <strong>am listening</strong>. &rarr; 👂 [Action now].</li>
      <li>📝 They <strong>are waiting</strong>. &rarr; ⏳ [Current state].</li>
      <li>📝 It <strong>is raining</strong>. &rarr; 🌧️ [Weather now].</li>
      <li>📝 She <strong>is cooking</strong>. &rarr; 🍳 [Ongoing action].</li>`
  },
  26: {
    moreExamples: `
      <li>📝 <strong>Am I</strong> dreaming? &rarr; 😴 [Question].</li>
      <li>📝 They <strong>aren't</strong> laughing. &rarr; 😐 [Negative action].</li>
      <li>📝 <strong>Is it</strong> working? &rarr; ⚙️ [Operational question].</li>
      <li>📝 We <strong>aren't</strong> joking. &rarr; 💼 [Serious state].</li>`
  },
  27: {
    moreExamples: `
      <li>📝 <strong>Why</strong> are you sad? &rarr; 😢 [Reason].</li>
      <li>📝 <strong>How</strong> is the food? &rarr; 😋 [Quality].</li>
      <li>📝 <strong>Which</strong> one is yours? &rarr; 👆 [Choice].</li>
      <li>📝 <strong>Whose</strong> bag is this? &rarr; 🎒 [Possession].</li>`
  },
  28: {
    moreExamples: `
      <li>📝 Please <strong>wait</strong> here. &rarr; 🛑 [Request].</li>
      <li>📝 <strong>Don't forget</strong> your keys. &rarr; 🔑 [Advice/Order].</li>
      <li>📝 <strong>Close</strong> the door. &rarr; 🚪 [Command].</li>
      <li>📝 <strong>Take</strong> a seat. &rarr; 🪑 [Instruction].</li>`
  },
  29: {
    moreExamples: `
      <li>📝 I see <strong>you</strong>. &rarr; 👀 [Object].</li>
      <li>📝 Help <strong>us</strong>. &rarr; 🤝 [Object plural].</li>
      <li>📝 Give it to <strong>me</strong>. &rarr; 🎁 [Object singular].</li>
      <li>📝 Listen to <strong>them</strong>. &rarr; 🗣️ [Object plural].</li>`
  },
  30: {
    moreExamples: `
      <li>📝 <strong>Some</strong> milk. &rarr; 🥛 [Uncountable affirmative].</li>
      <li>📝 <strong>Any</strong> oranges? &rarr; 🍊🍊 [Countable question].</li>
      <li>📝 <strong>An</strong> egg. &rarr; 🥚 [Singular countable].</li>
      <li>📝 <strong>Some</strong> salt. &rarr; 🧂 [Uncountable affirmative].</li>`
  }
};

topics.forEach(t => {
  if (batchUpdates[t.id]) {
    const closingUlIndex = t.theory.lastIndexOf('</ul>');
    if (closingUlIndex !== -1) {
      t.theory = t.theory.slice(0, closingUlIndex) + batchUpdates[t.id].moreExamples + t.theory.slice(closingUlIndex);
    }
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(topics, null, 2));
console.log('✅ A1 Topics 16-30 expanded with MORE examples.');
