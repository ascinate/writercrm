import React from 'react';
import { BlockManager } from 'easy-email-core';
import { EmailEditor, EmailEditorProvider } from 'easy-email-editor';
import 'easy-email-editor/lib/style.css';

const initialValues = {
    subject: 'Welcome to Easy-email',
    subTitle: 'Nice to meet you!',
  };

function EmailEdit (){
    return(
        <>
          <EmailEditorProvider
            data={initialValues}
            height={'calc(100vh - 72px)'}
            >
            {({ values }) => {
                return <EmailEditor />;
            }}
            </EmailEditorProvider>
        </>
    )
}
export default EmailEdit;