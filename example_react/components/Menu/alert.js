import { CAlert, CButton, CCallout } from '@coreui/react';
import { useState } from 'react';

function CoAlert() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CAlert
        color="warning"
        dismissible
        onClose={() => {
          alert('👋 Well, hi there! Thanks for dismissing me.');
        }}
      >
        <strong>Go right ahead</strong> and click that dimiss over there on the
        right.
      </CAlert>
    </>
  );
}

export default CoAlert;
