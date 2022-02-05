
import Countdown from 'react-countdown';

const CompletionList = () => 'Event Started';

const pad = (num, size = 2) => {
    const s = '000000000' + num;
    return s.substr(s.length - size);
  }

const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        return <CompletionList />
    } else {
        return <>{days} days {pad(hours)}:{pad(minutes)}:{pad(seconds)}</>;
    }
    
}

const EventCountDown = ({date}) => {
    const d = new Date(date);
    return (
        <Countdown date={d} renderer={renderer} />
    )
}

export default EventCountDown;