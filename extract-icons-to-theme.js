const { readdirSync, readFileSync, writeFileSync } = require('fs');

const theme = JSON.parse(readFileSync('./theme.json'));
const themeEmbedded = JSON.parse(readFileSync('./theme-embedded.json'));
theme.elements = [];
themeEmbedded.elements = [];

const baseUrl = process.env.BASE_URL || 'https://raw.githubusercontent.com/J-Cat/structurizr-fontawesome-theme/master/fontawesome'

const folders = readdirSync('./fontawesome', { withFileTypes: true });
for (const folder of folders) {
  if (!folder.isDirectory()) {
    continue;
  }

  const icons = readdirSync(`./fontawesome/${folder.name}`, { withFileTypes: true });
  for (const icon of icons) {
    if (icon.isFile() && icon.name.endsWith('.svg')) {
      const iconTag = `${folder.name}-${icon.name.substring(0, icon.name.length-4)}`;
      const iconPath = `${baseUrl}/${folder.name}/${icon.name}`;
      theme.elements = [
        ...theme.elements,
        {
          tag: `FontAwesome - ${iconTag}`,
          icon: iconPath,
        },
      ];
      const iconBase64 = readFileSync(`./fontawesome/${folder.name}/${icon.name}`, { encoding: 'base64' });
      themeEmbedded.elements = [
        ...themeEmbedded.elements,
        {
          tag: `FontAwesome - ${iconTag}`,
          icon: `data:image/svg+xml;base64,${iconBase64}`,
        },
      ];
    }
  }      
}

writeFileSync('./theme.json', JSON.stringify(theme, null, ' '));
writeFileSync('./theme-embedded.json', JSON.stringify(themeEmbedded, null, ' '));
