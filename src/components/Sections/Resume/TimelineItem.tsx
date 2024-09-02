import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {


  const {title, date, location, content, about, experiences} = item;
  return (
    <div className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>&bull;</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>

      <h4>{about}</h4>

      {content}

      <h4><strong>Experiences</strong></h4>
      <ul className="list-inside list-disc">
        {experiences.map(({text}) => {
          return (
            <li>
              {text}
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col space-y-32">
        <br />
      </div>
    </div>


  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
