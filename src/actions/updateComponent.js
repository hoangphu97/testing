export const UPDATE_COMPONENT = 'updateComponent';
export const ABC = 'ABC';
export function updateComponent(newComponent) {
    return {
        type: UPDATE_COMPONENT,
        component: newComponent
    };
}