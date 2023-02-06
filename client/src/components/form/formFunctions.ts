
export const handleFieldChange = (targetField: any ) => {
    
    const fieldValueSetter = (event: { preventDefault: () => void; target: { value: React.SetStateAction<string> }}): void => {
        event.preventDefault();
        targetField(event.target.value);
    }
    return fieldValueSetter
}
        
