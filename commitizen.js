module.exports = {
    types: [
        {
            value: 'build',
            name:
                'build:     Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
        },
        { value: 'feat', name: 'feat:      Add new features, functional' },
        { value: 'fix', name: 'fix:       Fix bags' },
        {
            value: 'refactor',
            name: 'refactor:  Fix code without addition new features',
        },
        { value: 'docs', name: 'docs:      Update docs' },
        { value: 'revert', name: 'revert:    Back to previous commits' },
        {
            value: 'style',
            name: 'style:     Codestile edits (tabs, dots, semicolons etc)',
        },
        {
            value: 'ci',
            name:
                'ci:     Changes to our CI configuration files and scripts (just nothing)',
        },
        { value: 'test', name: 'test:     Add tests' },
        { value: 'chore', name: 'chore:     Other changes' },
    ],

    scopes: [
        { name: 'client' },
        { name: 'client/pages' },
        { name: 'client/layouts' },
        { name: 'client/components' },
        { name: 'server' },
        { name: 'server/api' },
        { name: 'configs' },
    ],

    messages: {
        type: 'Type of your changes:',
        scope: 'Select area where you made changes (optional)',
        subject: 'Write short DISCRIPTION of your changes:\n',
        breaking: 'List of BREAKING CHANGES (optional):\n',
        confirmCommit: 'Everything okay?',
    },

    subjectLimit: 72,
    allowBreakingChanges: false,
    upperCaseSubject: true,
}
