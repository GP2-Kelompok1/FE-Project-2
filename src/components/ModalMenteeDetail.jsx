import React from 'react';

function ModalMenteeDetail({ visible, onClose }) {
  const handleOnClose = () => {
    if (e.target.id === 'button') onClose();
    onClose();
  };
  if (!visible) return null;
  return (
    <div className="flex justify-center ">
      <div className="fixed inset-0 mb-4 bg-alta-dark opacity-70 backdrop-blur-3xl w-2/4">
        <label htmlFor="my-modal-6" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMenteeDetail;
