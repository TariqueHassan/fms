import React from 'react';
import Modal from 'react-modal';
import { Button, Pane, Dialog } from 'evergreen-ui';
export function MeetingsReminderModal(props) {

  const [isShown, setIsShown] = React.useState(props.openModal);

  return (
    <div>
      <Pane >
        <Dialog 
          isShown={isShown}
          title="Previous Assigned Work"
          width="750px"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="OK"
        >
          The Group 3 was assigned to complete 30% development of the project. Details shown below:
          <hr/>
          <Pane height={300} width="100%" backgroundColor="#FAFFF1">
          Following Parts of Front-end should be complete before the deadline:
            <ul>
              
              <li>Navbar</li>
              <li>Sidebar</li>
              <li>Home Page</li>
            </ul>
          </Pane>
      </Dialog>

      </Pane>
    </div>
  );
}
