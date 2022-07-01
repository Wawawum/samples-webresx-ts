namespace www {

    export namespace samples {

        export const contactForm = {
            
            onLoad: (executionContext: Xrm.Events.EventContext): void => {
                
                const formContext = executionContext.getFormContext();
                formContext.ui.setFormNotification('Hello World!', 'INFO', 'www_contact_form_notif');
            }
        }
    }
}