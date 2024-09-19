import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  const [showStatus, setShowStatus] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
        setOnlineStatus(true);
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
    }
    const handleOffline = () => {
        setOnlineStatus(false);
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return showStatus ? onlineStatus : null;
};

export default useOnlineStatus;