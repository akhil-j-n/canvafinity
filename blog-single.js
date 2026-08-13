/* ============================================================
   BUSHEL & BIN — blog post catalog
   ============================================================ */
const POSTS = [
  {
    id:"b01", cat:"recipes", catLabel:"Recipes",
    title:"5 Make-Ahead Sides for a Stress-Free Thanksgiving",
    img:"https://loremflickr.com/1200/700/thanksgiving,dinner?lock=101",
    author:"Marta Lin", authorRole:"Bushel & Bin Kitchen", avatar:"https://i.pravatar.cc/200?img=5",
    date:"Nov 10, 2026", readTime:"4 min read",
    excerpt:"Get a head start on the big meal with five sides you can prep two days ahead and reheat like they're fresh off the stove.",
    body:`
      <p>Thanksgiving day runs smoother when the oven isn't fighting you for space at 3pm. Every year our kitchen tests which sides actually hold up in the fridge for 48 hours &mdash; and which ones just taste reheated. These five passed.</p>
      <h2>Prep Two Days Ahead</h2>
      <p>Do the knife work and the cooking now, then finish with a quick reheat on the day. Here's the make-ahead lineup we build our own Thanksgiving table around:</p>
      <ul>
        <li><strong>Make-ahead mashed potatoes</strong> &mdash; loosen with extra cream and butter when reheating in a low oven, covered.</li>
        <li><strong>Green bean casserole</strong> &mdash; assemble fully, add the crispy onions only in the last 10 minutes of reheating.</li>
        <li><strong>Cranberry sauce</strong> &mdash; actually improves after a day or two in the fridge as the flavors settle.</li>
        <li><strong>Stuffing</strong> &mdash; bake it the night before in a low oven, then re-crisp the top before serving.</li>
        <li><strong>Sweet potato casserole</strong> &mdash; assemble, refrigerate unbaked, and bake fresh the day of for the best marshmallow top.</li>
      </ul>
      <h2>The Morning Of</h2>
      <p>Pull everything from the fridge an hour before your reheat window so nothing goes into the oven ice cold &mdash; that's the difference between a side that tastes reheated and one that tastes fresh.</p>
      <blockquote>"Cold food takes twice as long to reheat evenly and dries out doing it. Let it come up to room temp first." &mdash; Marta Lin, Bushel &amp; Bin Kitchen</blockquote>
      <p>With the sides handled two days out, the only thing left on Thursday is the turkey &mdash; and maybe the dishes.</p>
    `
  },
  {
    id:"b02", cat:"guides", catLabel:"Guides",
    title:"How to Pick the Perfect Turkey This Year",
    img:"https://loremflickr.com/1200/700/turkey,butcher?lock=102",
    author:"James Okafor", authorRole:"Butcher Counter", avatar:"https://i.pravatar.cc/200?img=12",
    date:"Nov 5, 2026", readTime:"5 min read",
    excerpt:"Fresh or frozen? How many pounds per guest? Our butcher counter answers the questions we hear most every November.",
    body:`
      <p>Every year around this time, our butcher counter turns into an unofficial turkey help desk. Here are the answers we give most, all in one place.</p>
      <h2>Fresh or Frozen?</h2>
      <p>Fresh turkeys never dip below refrigeration temperature, which some say keeps the texture a touch more tender. Frozen turkeys are just as good once properly thawed and are easier to buy ahead of time, since they hold safely in the freezer for months.</p>
      <h2>How Much Turkey Per Guest</h2>
      <ul>
        <li>1 to 1.5 lbs per guest if you want generous leftovers</li>
        <li>3/4 lb to 1 lb per guest for a lighter buffet with lots of sides</li>
        <li>Add an extra pound overall if kids' portions are smaller but you still want a full bird on the table for presentation</li>
      </ul>
      <p>If you're buying frozen, plan the thaw time backwards from Thursday: roughly 24 hours in the refrigerator for every 4 to 5 pounds of bird. A 16-pound turkey needs about 3 to 4 full days in the fridge.</p>
      <blockquote>"The thaw is the part people rush, and it's the one step you can't speed up safely. Count backward from your cook day and add a buffer." &mdash; James Okafor, Butcher Counter</blockquote>
      <p>Ask any of us at the counter for a free brining bag with your turkey purchase this week &mdash; it's the easiest upgrade for a juicier bird with almost no extra effort.</p>
    `
  },
  {
    id:"b03", cat:"store-news", catLabel:"Store News",
    title:"Behind the Counter: Meet Our Bakery Team",
    img:"https://loremflickr.com/1200/700/bakery?lock=13",
    author:"Bushel & Bin Staff", authorRole:"Store Team", avatar:"https://i.pravatar.cc/200?img=33",
    date:"Oct 28, 2026", readTime:"3 min read",
    excerpt:"The 4am dough, the secret to our crumb-top pies, and why the ovens never really stop &mdash; a morning with our bakery crew.",
    body:`
      <p>By the time most of Maple Grove is still asleep, our bakery team has already been at it for hours. The first dough goes in at 4am, and the ovens don't really stop until closing.</p>
      <h2>The 4am Start</h2>
      <p>Dinner rolls and the day's bread go first, since they need the longest proof time. Pies come next, timed so the first batch is cooling by the time the doors open at 7am.</p>
      <p>The crumb-top on our apple pies is the one recipe the team won't fully share &mdash; but they will say it's a cold-butter, cold-hands job, and that rushing it is the most common way to ruin it.</p>
      <blockquote>"People think baking is precise and cooking is loose. It's the opposite in here &mdash; the dough tells you what it needs, you just have to be paying attention." &mdash; Bushel &amp; Bin Bakery Team</blockquote>
      <h2>Why It Never Stops</h2>
      <p>Fresh means fresh all day, not just in the morning &mdash; so smaller batches go in every few hours right up until the evening rush. It's more work than baking one big batch at dawn, but it's the only way the 6pm pie tastes the same as the 7am one.</p>
      <p>Next time you're in for a Black Friday BOGO pie, that's the crew to thank.</p>
    `
  },
  {
    id:"b04", cat:"tips", catLabel:"Tips",
    title:"Black Friday Shopping Tips: How to Stock Up Without Overspending",
    img:"https://loremflickr.com/1200/700/shopping,grocery?lock=104",
    author:"Priya Desai", authorRole:"Store Manager", avatar:"https://i.pravatar.cc/200?img=25",
    date:"Nov 15, 2026", readTime:"6 min read",
    excerpt:"A doorbuster is only a deal if you actually needed it. Here's how we shop our own sale.",
    body:`
      <p>Running a store during Black Friday week means watching a lot of carts go through checkout &mdash; and noticing which shoppers walk out happiest with their total. Here's what they tend to do differently.</p>
      <h2>Shop With a List, Not a Layout</h2>
      <p>Doorbusters are placed to catch your eye on the way to what you actually came for. A list built before you walk in keeps the detour short.</p>
      <ul>
        <li>Check what you already have in the pantry and freezer before adding it to the list</li>
        <li>Write down quantities, not just items &mdash; "2 bags potatoes" beats grabbing four because they're cheap</li>
        <li>Separate needs (this week's meals) from stock-up items (shelf-stable pantry staples)</li>
      </ul>
      <h2>Rain Checks Are Your Friend</h2>
      <p>If a doorbuster sells out, ask for a rain check instead of substituting something you didn't plan for. You'll still get the sale price once it's restocked, without the impulse buy.</p>
      <blockquote>"The best cart I saw all week was half the size of the one next to it and cost less &mdash; because she only bought what was on her list, sale or not." &mdash; Priya Desai, Store Manager</blockquote>
      <p>A doorbuster is only a deal if you were going to buy it anyway. Everything else is just a very convincing markdown.</p>
    `
  },
  {
    id:"b05", cat:"seasonal", catLabel:"Seasonal",
    title:"What's In Season: A Fall Produce Guide",
    img:"https://loremflickr.com/1200/700/autumn,harvest?lock=105",
    author:"Marta Lin", authorRole:"Bushel & Bin Kitchen", avatar:"https://i.pravatar.cc/200?img=5",
    date:"Oct 20, 2026", readTime:"4 min read",
    excerpt:"Squash, apples, brussels sprouts, and more &mdash; what to look for in the produce aisle this month, and how to use it.",
    body:`
      <p>Fall produce is forgiving, cheap, and easy to cook well &mdash; roast most of it and it's hard to go wrong. Here's what's at its best in the aisle right now.</p>
      <h2>What to Look For</h2>
      <ul>
        <li><strong>Winter squash</strong> &mdash; butternut and acorn should feel heavy for their size with a firm, matte skin.</li>
        <li><strong>Apples</strong> &mdash; firmer varieties like Honeycrisp and Granny Smith hold up best for baking.</li>
        <li><strong>Brussels sprouts</strong> &mdash; smaller, tighter heads roast up sweeter than larger ones.</li>
        <li><strong>Cranberries</strong> &mdash; they should bounce slightly when dropped &mdash; that's actually how growers test freshness.</li>
        <li><strong>Sweet potatoes</strong> &mdash; smooth skin without soft spots; store in a cool, dark spot rather than the fridge.</li>
      </ul>
      <h2>The Easiest Fall Dinner</h2>
      <p>Toss any combination of the above in olive oil, salt, and pepper, and roast at 425&deg;F until the edges caramelize. It's the one recipe that works for nearly everything in this list.</p>
      <blockquote>"If you're not sure what to do with a vegetable, roasting it hot and fast is almost never the wrong answer." &mdash; Marta Lin, Bushel &amp; Bin Kitchen</blockquote>
      <p>Most of this list is also marked down storewide this week &mdash; check the Produce aisle in our Black Friday circular for specifics.</p>
    `
  },
  {
    id:"b06", cat:"recipes", catLabel:"Recipes",
    title:"Leftover Turkey, Reinvented: 4 Easy Next-Day Recipes",
    img:"https://loremflickr.com/1200/700/sandwich,turkey?lock=106",
    author:"Marta Lin", authorRole:"Bushel & Bin Kitchen", avatar:"https://i.pravatar.cc/200?img=5",
    date:"Nov 30, 2026", readTime:"3 min read",
    excerpt:"Turkey pot pie, turkey tacos, and two more ways to turn Thursday's centerpiece into Friday's easiest dinner.",
    body:`
      <p>The day after is the easiest cooking day of the year &mdash; everything is already made, it just needs a new shape. Here are four ways we turn Thursday's turkey into Friday's dinner.</p>
      <h2>Four Ways to Reinvent It</h2>
      <ul>
        <li><strong>Turkey pot pie</strong> &mdash; shredded turkey, leftover gravy, and any vegetable in the fridge under a frozen puff pastry sheet.</li>
        <li><strong>Turkey tacos</strong> &mdash; warm shredded turkey with cumin and lime, into corn tortillas with whatever cranberry sauce is left as a quick relish.</li>
        <li><strong>Turkey and stuffing waffles</strong> &mdash; press leftover stuffing in a waffle iron, top with turkey and gravy. Better than it sounds.</li>
        <li><strong>Turkey soup</strong> &mdash; the carcass simmered with broth, leftover vegetables, and a handful of egg noodles.</li>
      </ul>
      <blockquote>"Nothing on this list needs a recipe you don't already know &mdash; it's really just leftovers wearing a different hat." &mdash; Marta Lin, Bushel &amp; Bin Kitchen</blockquote>
      <p>All four keep well enough to freeze, so if Thursday's bird was bigger than the table needed, Friday's cooking can cover next week too.</p>
    `
  }
];

function renderPost(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'b01';
  const post = POSTS.find(p => p.id === id) || POSTS[0];

  document.getElementById('page-title').textContent = post.title + ' | Bushel & Bin Market';
  document.getElementById('crumb-title').textContent = post.title;
  document.getElementById('post-cat').textContent = post.catLabel;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-meta').textContent = post.author + ' · ' + post.date + ' · ' + post.readTime;
  document.getElementById('post-hero').src = post.img;
  document.getElementById('post-hero').alt = post.title;
  document.getElementById('post-body').innerHTML = post.body;
  document.getElementById('author-avatar').src = post.avatar;
  document.getElementById('author-avatar').alt = post.author;
  document.getElementById('author-name').textContent = post.author + ', ' + post.authorRole;

  const related = POSTS.filter(p => p.cat === post.cat && p.id !== post.id).slice(0,3);
  const fill = related.length < 3 ? POSTS.filter(p => p.id !== post.id && !related.includes(p)).slice(0, 3 - related.length) : [];
  const relatedGrid = document.getElementById('related-posts');
  relatedGrid.innerHTML = related.concat(fill).map(p => `
    <div class="col">
      <div class="blog-card">
        <a href="blog-single.html?id=${p.id}" class="blog-media d-block"><img src="${p.img}" alt="${p.title}" loading="lazy"></a>
        <div class="blog-body">
          <span class="blog-cat">${p.catLabel}</span>
          <h3 class="blog-title" style="font-size:1rem;"><a href="blog-single.html?id=${p.id}">${p.title}</a></h3>
          <p class="blog-meta mb-0">${p.author} &middot; ${p.date}</p>
        </div>
      </div>
    </div>
  `).join('');
}
document.addEventListener('DOMContentLoaded', renderPost);
