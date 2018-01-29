const bugger = () => {
    let lastCommand

    const debug = () => {
        const { execSync } = require('child_process')

        let input = execSync(
            'read input && echo $input',
            { stdio: ['inherit', 'pipe'] }
        ).toString()

        if (input.match(/^q(uit)?\s*?$/) || input.match(/^exit\s*?$/)) { return              }
        if (input.match(/^\_\s*?$/))                                   { input = lastCommand }

        lastCommand = input

        try {
            const result = eval(input)
            console.log(result)
        } catch (err) {
            console.log(err)
        }

        debug()
    }

    debug()
}

module.exports = bugger.toString()
