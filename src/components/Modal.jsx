import React from 'react';

function Modal({ children, visible, setVisible }) {
    const class_modal = ['modal']
    if (visible) {
        class_modal.push('active')
    }

    return (
        <div
            className={class_modal.join(' ')}
            onClick={() => setVisible(false)}
        >
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div >
    );
}

export default Modal;