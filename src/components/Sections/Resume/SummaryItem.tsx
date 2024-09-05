import {FC, memo} from 'react';

import {SummaryItem} from '../../../data/dataDef';

const SummaryItem: FC<{item: SummaryItem}> = memo(({item}) => {


  const {siKey, title, date, location, experiences} = item;
  return (
    <div className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left"
         key={siKey}>
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>&bull;</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <ul className="list-inside list-disc">
        {experiences.map(({eiKey, text}) => {
          return (
            <li key={eiKey}>
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

SummaryItem.displayName = 'SummaryItem';
export default SummaryItem;