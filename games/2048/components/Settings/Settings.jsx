import { useSelector } from 'react-redux';

const Settings = () => {
  const moveIntervalMS = useSelector((state) => state.settings.moveIntervalMS);

  return (
    <span>
      Move speed: <b>{moveIntervalMS / 1000} sec</b>
    </span>
  );
};

export default Settings;
