'use client';

import { RadioGroup, XStack } from 'tamagui';
import { Fragment, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import ItemCategory from '../ItemCategory';

// Constants
import { MENU_ITEM_FILTER, SEARCH_QUERIES } from '@/constants';

// Utils
import { getSearchParams, updateSearchParams } from '@/utils';

const FilterProduct = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { category = '' } = getSearchParams(searchParams);

  const handleFilterProduct = useCallback(
    (category: string) => {
      const value = category;

      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.CATEGORIES,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );
  return (
    <XStack
      width='100%'
      paddingHorizontal='28px'
      paddingTop="20px"
      paddingBottom="26px"
      backgroundColor='transparent'
      gap='15px'
      justifyContent="center"
      alignItems="center"
      marginBottom="146px"
      $gtMd={{
        width: '73%',
        paddingHorizontal: '145px',
        backgroundColor: '$backgroundFilter',
        boxShadow: '0 11px 30px 4px rgba(0, 0, 0, 7%)',
        gap: '75px',
        marginTop: '-20px'
      }}
    >
      {MENU_ITEM_FILTER.map((item) => {
        const IconComponent = item.icon || Fragment;
        const IconActiveComponent = item.iconActive || Fragment;
        return (
          <RadioGroup
            flexDirection="column"
            alignItems="center"
            cursor="pointer"
            onValueChange={handleFilterProduct}
            value={category}
            key={item.id}
          >
            <ItemCategory
              value={item.value}
              title={item.itemContent}
              filter={category}
              icon={<IconComponent />}
              iconActive={<IconActiveComponent />}
            />
          </RadioGroup>
        );
      })}
    </XStack>
  );
};

export default FilterProduct;
