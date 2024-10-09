import classNames from 'classnames';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {


  const {tlKey, title, date, location, content, about, experiences, reference} = item;
  return (
    <div className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left"
         key={tlKey}>
      <header className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          {location && <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>}
          {date && <span>&bull;</span>}
          {date && <span className="flex-1 text-sm sm:flex-none">{date}</span>}
        </div>
        <h4>{about}</h4>
      </header>
      <section>
        {content}
      </section>
      {experiences && experiences.length > 0 && (
        <>
          <header>
            <h4 className="font-bold text-lg">Experiences</h4>
          </header>
          <ul className="list-inside list-disc">
            {experiences.map(({eiKey, text}) => {
              return (
                <li key={eiKey}>
                  {text}
                </li>
              );
            })}
          </ul>
        </>
      )}
      <div className="flex flex-col space-y-4"></div>
      <aside>
        <div className="flex flex-col gap-y-4">
          {reference.map(({href, text, primary, Icon}) => (
            <a
              className={classNames(
                'flex gap-x-4 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium ring-offset-gray-700/80 hover:bg-gray-700/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                primary ? 'border-orange-500 ring-amber-500' : 'border-b-amber-500 ring-amber-300',
              )}
              href={href}
              key={text}
              rel="noopener noreferrer"
              target="_blank"
            >
              {text}
              {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </a>
          ))}
        </div>
      </aside>
      <div className="flex flex-col space-y-32"></div>
    </div>


  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
