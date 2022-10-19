export const filterOptions = [
    {id: 1, value: 'Completed', label: 'Completed'},
    {id: 2, value: 'Active', label: 'Active'},
    {id: 3, value: 'All', label: 'All'},
    {id: 4, value: 'ByTag', label: 'By Tag'},
]

export const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
    ByTag: () => true,
};