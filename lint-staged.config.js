module.exports = {
  '*.ts': ['eslint'],
  '**/*.+(json|ts|yml|yaml|md|mdx)': ['prettier --write', 'git add'],
};
