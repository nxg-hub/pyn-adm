import { useRef, useState } from 'react';
// import NotificationModal from '/src/components/navbar/_components/NotificationModalProps';
import { Link } from 'react-router-dom';
import Bell from '../../../assets/images/bell.svg';
import Headphone from '../../../assets/images/headphone.svg';
import Settings from '../../../assets/images/settings.svg';

const ActionButtons = () => {
  const [notificationCount] = useState(0); // Static count
  const [notifications] = useState([]); // Empty notifications array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notificationRef = useRef(null);

  const handleMarkAsRead = () => {};

  return (
      <div className="flex items-center md:justify-between md:space-x-6 sm:px-10">
        <div className="flex space-x-16 justify-center items-center">
          <Link to={'/account/more'} className="md:flex items-center hidden">
            <div className="hover:scale-95">
              <img src={Headphone} alt="customer_care" />
            </div>
          </Link>

          <div className="relative" ref={notificationRef}>
            <button
                className="hover:scale-95 focus:outline-none relative p-2"
                aria-label="Notifications">
              <div className="hover:scale-95">
                <img src={Bell || '/placeholder.svg'} alt="notifications" />
              </div>
              {notificationCount > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount}
                  </div>
              )}
            </button>
            {isModalOpen && (
                <NotificationModal
                    isOpen={isModalOpen}
                    notifications={notifications}
                    onClose={() => setIsModalOpen(false)}
                    onMarkAsRead={handleMarkAsRead}
                />
            )}
          </div>

          <Link to={'/account/settings'}>
            <div className="hover:scale-95">
              <img src={Settings} alt="customer_care" />
            </div>
          </Link>
        </div>
      </div>
  );
};

export default ActionButtons;