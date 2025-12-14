design notes:

data:
* task
    - title
    - description
    - auto-generated id
    - parent id (default 0)
    - creation time
    - completed time
    - priority
    - due date/time
    - note list
    - history list
    - template id
* task template
    - title
    - description
    - recurrence (optional). when creating a new task manually, a template can be used for auto-fill details
    - parent id (for recurring tasks)
    - bool: allow multiple incomplete generated tasks
    - last generated task id

model:
* tasks form a heirarchy.
* top-levels 'task' objects can represent a category to contain related tasks (finance, cleaning/chores, projects, social events, meetings, etc). msicellanous tasks can be top-level or put under a 'misc' category.
* child tasks be be nested arbitrarily deeply.

views:
- task list. lists all leaf tasks with their path
- task tree. explorer-style view with tree on the left, details of selected task on the right
- task view. shows a single selected task with details.
    layout:
        path breadcrumbs (category > main task > ... parent of selected task )
        task title   | completed %/due date/etc
        task details
        ... list of child task titles
        history list

archive filter: by default, don't show tasks that have been completed for >= 14 days

task completed %: % of leaf child tasks that have been marked complete. only counts children that have not been archived.
