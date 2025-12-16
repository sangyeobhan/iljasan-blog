const theme = {
  name: 'gruvbox-dark',
  colors: {
    'editor.background': '#282828', // Gruvbox Dark Medium Background
    'editor.foreground': '#ebdbb2',
    'editor.selectionBackground': '#504945',
    'editor.lineHighlightBackground': '#3c3836',
    'editorCursor.foreground': '#ebdbb2',
    'editorWhitespace.foreground': '#504945',
    'editorIndentGuide.background': '#504945',
    'editorIndentGuide.activeBackground': '#ebdbb2',
  },
  tokenColors: [
    {
      scope: 'comment',
      settings: {foreground: '#928374', fontStyle: 'italic'},
    },
    {
      scope: 'string',
      settings: {foreground: '#b8bb26'}, // Green
    },
    {
      scope: 'constant.numeric',
      settings: {foreground: '#d3869b'}, // Purple
    },
    {
      scope: 'constant.language',
      settings: {foreground: '#d3869b'}, // Purple
    },
    {
      scope: ['keyword', 'storage'],
      settings: {foreground: '#fb4934', fontStyle: 'bold'}, // Red
    },
    {
      scope: 'entity.name.function',
      settings: {foreground: '#b8bb26', fontStyle: 'bold'}, // Green
    },
    {
      scope: 'entity.name.class',
      settings: {foreground: '#fabd2f'}, // Yellow
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {foreground: '#8ec07c'}, // Aqua
    },
    {
      scope: 'variable',
      settings: {foreground: '#ebdbb2'},
    },
    {
      scope: 'variable.parameter',
      settings: {foreground: '#83a598'}, // Blue
    },
    {
      scope: 'support.function',
      settings: {foreground: '#fabd2f'}, // Yellow
    },
    {
      scope: 'tag',
      settings: {foreground: '#fb4934'}, // Red
    },
    {
      scope: 'markup.heading',
      settings: {foreground: '#fabd2f', fontStyle: 'bold'},
    },
  ],
};

export default theme;