let lastCommand

const bugger = (name = 'bugger') => {
    return {
        [name] () {
            const execSync = require('child_process').execSync

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

            this[name]()
        }
    }[name]()
}

module.exports = {
    debug: bugger.toString(),
}
