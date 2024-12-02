'use client';

import { View, XStack } from 'tamagui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

// Constants
import { ROUTER, SEARCH_QUERIES } from '@/constants';

// Icons
import { SearchIcon } from '@/icons';

// Utils
import { getSearchParams, updateSearchParams } from '@/utils';
import { InputField } from '@/universal';

const InputSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { name } = getSearchParams(searchParams);

  const isShowSearch = pathname === ROUTER.PRODUCT;

  const handleOnChange = useDebounceCallback((value: string) => {
    const updatedParams = updateSearchParams(searchParams, SEARCH_QUERIES.NAME, value);

    replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
  }, 500);
  return (
    <>
      {isShowSearch && (
        <XStack
          width="100%"
          borderWidth="1px"
          borderRadius="$sm"
          padding={10}
          gap={5}
          backgroundColor="$backgroundBody"
          $gtMd={{
            width: '350px'
          }}
        >
          <View>
            <SearchIcon />
          </View>
          <InputField
            variant="search"
            placeholder="Search for minimalist chair"
            defaultValue={name}
            onChangeText={handleOnChange}
            data-testid="search"
          />
        </XStack>
      )}
    </>
  );
};

export default InputSearch;
