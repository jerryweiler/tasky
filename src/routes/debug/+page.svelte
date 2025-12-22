<script lang="ts">
    import * as Tasks from "$lib/tasks"

    interface Command {
        value: string;
        args: string[];
        exec(args: string[]): Promise<string>;
    };

    const commands: Command[] = [
        {value: "tasks", args:[], exec: getTasks},
        {value: "task", args:["taskid"], exec: getTask},
        {value: "help", args: [], exec: usage},
        {value: "?", args: [], exec: usage},
    ];

    async function usage(args: string[]): Promise<string> {
        let result = "commands: \n";
        for (let c of commands) {
            let value = "  " + c.value + " " + c.args.join(" ");
            result += value + "\n";
        }

        return result;
    }

    async function getTask(args: string[]): Promise<string> {
        const task = await Tasks.getTask(args[0]);
        return `task: id ${task.id}\n`;
    }

    async function getTasks(args: string[]): Promise<string> {
        const tasks = await Tasks.getTasks();
        let result = "";
        for (let task of tasks) {
            result += `task: id ${task.id}\n`
        }
        return result;
    }

    async function handleCommand(command: string): Promise<void> {
        const output = document.getElementById('output')!;
        output.textContent += "$ " + command + '\n';

        let parts = command.split(" ");
        for (let c of commands) {
            if (parts.length === c.args.length+1 && c.value === parts[0]) {
                parts.shift();
                let result = await c.exec(parts);
                output.textContent += result + "\n";
                return;
            }
        }

        // command was not found or had wrong list of args
        let result = await usage([]);
        output.textContent += result + "\n";
    }

    async function handleKeyDown(event: KeyboardEvent): Promise<void> {
        const command = document.getElementById('command') as HTMLInputElement;

        if (event.key === 'Enter') {
            event.preventDefault();
            await handleCommand(command.value);
            command.value = '';
        }
    }
</script>

<h1>Debug Page</h1>
<div class="p-2">
    <input id="command" class="w-full border-2 border-black p-1" on:keydown={handleKeyDown} />
    <pre id="output" class="mt-4 h-full w-full p-1"></pre>
</div>
