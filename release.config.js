const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md"
            }
        ],
        ['@semantic-release/git', {
            "assets": ["CHANGELOG.md"],
        }],
        '@semantic-release/github'
    ]
}

module.exports = config;
