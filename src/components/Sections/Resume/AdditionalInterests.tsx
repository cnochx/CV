import {FC, memo} from 'react';

import {LifeItem} from '../../../data/dataDef';

const AdditionalInterests: FC<{item: LifeItem}> = memo(({item}) => {


  const {relationshipStatus,
         familyStatus,
         privateInterests,
         location} = item;
  return (
    <div className="flex flex-col space-y-2 pb-8 text-center last:pb-0 md:text-left">
      <ul>
        <li>
          {relationshipStatus}
        </li>
        <li>
          {familyStatus}
        </li>
        <li>
          {privateInterests}
        </li>
        <li>
          {location}
        </li>
      </ul>

      <div className="flex flex-col space-y-32">
      <br />
      </div>
    </div>


  );
});

AdditionalInterests.displayName = 'AdditionalInterests';
export default AdditionalInterests;
