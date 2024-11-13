'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

// Constants
import { PREV } from '@/constants';

// Utils
import { formatPagination } from '@/utils';

// Types
import { PaginationType } from '@/types';

export const usePagination = <T>(pagination: T[], limitPage: number) => {
  const [data, setData] = useState<PaginationType>({
    limit: limitPage,
    currentPage: 1,
    arrOfCurrButtons: [],
  });

  const { limit, currentPage, arrOfCurrButtons } = data;
  const totalCount = pagination?.length;

  const isDisabledPrev = currentPage <= 1;
  const lastPage = Math.floor((totalCount + limit - 1) / limit);
  const isDisableNext = currentPage === lastPage || currentPage < 1;

  const filterData = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = limit + start;

    return pagination?.slice(start, end);
  }, [currentPage, limit, pagination]);

  const resetPage = useCallback(
    () => setData((prev) => ({ ...prev, currentPage: 1 })),
    [],
  );

  useEffect(() => {
    const tempNumberOfButtons = formatPagination({
      totalCount,
      limit,
      currentPage,
    });

    setData({
      limit: limit,
      currentPage: currentPage,
      arrOfCurrButtons: tempNumberOfButtons,
    });
  }, [currentPage, limit, totalCount]);

  const handleChangePage = useCallback(
    (currentPage: number) => {
      setData({
        ...data,
        currentPage,
      });
    },
    [data],
  );

  const handlePageChange = useCallback(
    (direction: string) => {
      setData({
        ...data,
        currentPage: direction === PREV ? currentPage - 1 : currentPage + 1,
      });
    },
    [currentPage, data],
  );

  const handlePageClick = useCallback(
    (value: number) => {
      setData({
        ...data,
        currentPage: value,
      });
    },
    [data],
  );

  return {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    setData,
    resetPage,
    handleChangePage,
    handlePageChange,
    handlePageClick,
  };
};
