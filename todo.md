Feature TODO list for the TODO app:

* add database support - better-sqlite
* add table for task list
* task should have:
    - auto-generated id
    - parent id (default 0)
    - title
    - creation time
    - completed time
    - description
    - priority
    - due date/time
* add table for task log/history
* add table for task note list
* add table for task templates (automatic recurring or manually)

APIs for data:
* add task (title, parent)
* complete/uncomplete task
* update title
* update description
* update parent
* add note to task
* update priority
* list tasks given parent id (with completion filter)
* list all tasks (with completion filter)
* add recurrent task generator
* add template (similar to generator, but manual)
* enable/disable recurrent task generator

* add debug page
* add task list to top-level page
* clicking a task should navigate to task page
* add page for selected task
* add child tasks to selected task page
* add 'new sub-task' page
