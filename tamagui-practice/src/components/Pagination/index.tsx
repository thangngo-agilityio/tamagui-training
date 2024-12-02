'use client';
// Components
import { ArrowPaginationIcon } from '@/icons';

// Constants
import { DOTS, NEXT, PREV } from '@/constants';
import { Stack, XStack } from 'tamagui';
import { Button } from '@/universal';

interface PaginationProps {
  currentPage?: number;
  isDisabledPrev?: boolean;
  isDisableNext?: boolean;
  arrOfCurrButtons?: string[];
  onPageChange?: (direction: string) => void;
  onClickPage?: (currentPage: number) => void;
}

const PaginationComponent = ({
  currentPage = 1,
  arrOfCurrButtons = [],
  isDisabledPrev = false,
  isDisableNext = false,
  onPageChange = () => { },
  onClickPage = () => { },
}: PaginationProps) => {
  const handleNextPage = () => onPageChange(NEXT);

  const handlePrevPage = () => onPageChange(PREV);

  return (
    <XStack
      data-testid="pagination"
      justifyContent="space-between"
      marginTop={1}
      flexWrap="wrap"
      gap={3}
      $gtMd={{
        gap: 0,
      }}
    >
      <XStack
        alignItems="center"
        width={arrOfCurrButtons.length > 1 ? '100%' : 'auto'}
        gap="10px"
        $gtMd={{
          width: arrOfCurrButtons.length > 2 ? '100%' : 'auto',
        }}
      >
        <Button
          width="30px"
          height="30px"
          justifyContent='center'
          alignItems='center'
          data-testid="prev-button"
          aria-label="btn-prev"
          variant="iconSecondary"
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          disabled={isDisabledPrev}
          onPress={handlePrevPage}
        >
          <ArrowPaginationIcon width="10px" height="10px" isExpanded={false} rotate="90deg" />
        </Button>
        <XStack alignItems="center"  $gtMd={{ width: 'auto' }}>
          {arrOfCurrButtons.map((item: string, index: number) => {
            const isDots = item === DOTS;
            const isDisable = currentPage === +item || isDots;
            const hoverStyle = isDots
              ? {}
              : {
                color: '$textTotalCart',
                backgroundColor: '$backgroundFilter',
              };
            const disableStyle = isDots
              ? {}
              : {
                color: '$textTotalCart',
                backgroundColor: '$backgroundFilter',
              };
            const handleClickPage = () => onClickPage(+item);

            return (
              <Button
                key={`${item}-${index}`}
                data-testid={`page-${item}-button`}
                aria-label="btn-pages"
                disabled={isDisable}
                marginHorizontal={0.5}
                variant="pagination"
                paddingHorizontal="15px"
                paddingVertical="10px"
                backgroundColor={currentPage === +item ? '$backgroundButtonPagination' : 'transparent'}
                {...(isDots && { cursor: 'not-allowed' })}
                hoverStyle={hoverStyle}
                onPress={handleClickPage}
                disabledStyle={disableStyle}
                style={{ fontSize: '$sm', color: currentPage === +item ? '$textPagination' : '$textSecondary' }}
              >
                {item}
              </Button>
            );
          })}
        </XStack>
        <Button
          width="30px"
          height="30px"
          justifyContent='center'
          alignItems='center'
          data-testid="next-button"
          aria-label="btn-next"
          variant="iconSecondary"
          cursor={isDisableNext ? 'not-allowed' : ''}
          disabled={isDisableNext}
          onPress={handleNextPage}
        >
          <ArrowPaginationIcon width="10px" height="10px" isExpanded={false} rotate="-90deg" />
        </Button>
      </XStack>
    </XStack>
  );
};

const Pagination = PaginationComponent;
export default Pagination;
