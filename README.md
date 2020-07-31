# [Online tools](https://tools.neoito.com)

Uses [Next.js](https://nextjs.org) as the framework.

For the design library [Shards Dashboard Lite React
](https://designrevision.com/downloads/shards-dashboard-lite-react/) is used.

# Tools List

- [x] Hex to String<br>
- [x] String to Hex<br>
- [x] Morse Encoder<br>
- [x] Take a break timer<br>
- [x] Deep Clean Object<br>
- [ ] rsa key gen<br>
- [ ] Jwt converter/ reverse decoder<br>
- [ ] SHA512 Converter<br>
- [ ] BCrypt creator<br>
- [ ] Image to gray scale image<br>

...More

# Contribute guidelines

### Start the project

<ol>
<li>Fork this repo</li>
<li>Clone this repo</li>
<li><code>yarn</code></li>
<li><code>yarn run dev</code></li>
</ol>

### Add a new page

<ol>
<li>See the pages directory</li>
<li>Make a copy of the string-to-hex.js</li>
<li>The function that corresponds to the convertor is in the <code>/utils</code> directory.</li>
<li>Add your awesome function.</li>
<li>To add your tool to the list in the side nav see the <code>/data/sidebar-nav-items.js</code> file and fill it with accordingly</li>
<li>Add your link in the <code>next.config.js</code> file</li>
<li>Send a PR</li>

</ol>

### Now its time to deploy your feature

 <li><code>yarn run deploy</code></li>

Boom your feature will be live at [tools.neoito.com](https://tools.neoito.com)
