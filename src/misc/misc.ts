export const onLoad = (executionContext: Xrm.Events.EventContext): void => {

    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification(`Some generic message`, 'INFO', 'www_misc_form_notif');
};