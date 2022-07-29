export const onLoad = (executionContext: Xrm.Events.EventContext): void => {

    const shuffledNumbers = 'test';

    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification(`Hello World! Here are some numbers: ${shuffledNumbers}`, 'INFO', 'www_contact_form_notif');
}