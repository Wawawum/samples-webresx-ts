export const onContactFormLoad = function(executionContext: Xrm.Events.EventContext) {

    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification('Hello world (part 2)!', 'INFO', 'www_contactform_notification');
};