Feature TODO list for the TODO app:

- &check; add database support - better-sqlite
- &check; add table for task list
- task should have:
    - &check; auto-generated id
    - parent id (default 0)
    - &check; title
    - creation time
    - completed time
    - description
    - priority
    - due date/time
- add table for task log/history
- add table for task note list
- add table for task templates (automatic recurring or manually)

APIs for data:
- add task (title, parent)
- complete/uncomplete task
- update title
- update description
- update parent
- add note to task
- update priority
- list tasks given parent id (with completion filter)
- list all tasks (with completion filter)
- add recurrent task generator
- add template (similar to generator, but manual)
- enable/disable recurrent task generator

Pages:
- &check; debug page
- &check; task list on top-level page
- &check; clicking a task should navigate to task page
- &check; selected task
    - child tasks
- &check; task creation
- task editing

TODO:
- enhance task creation to use parent id
- validate task title. must have at least one non-whitespace character
- enhance layout of task creation page
- have successful task creation redirect to the new task's page
