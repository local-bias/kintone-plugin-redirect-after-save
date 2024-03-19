import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { getTransitionUrl } from '@/lib/plugin';
import { Button } from '@mui/material';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  condition: Plugin.Condition;
  promiseResolver: (value: string | null) => void;
  promiseRejecter: (reason: any) => void;
};

const Component: FC<Props> = (props) => {
  const { condition, promiseResolver, promiseRejecter } = props;
  const { transitions } = condition;

  const buttonProps = transitions.map((transition) => {
    return {
      label: transition.label,
      href: getTransitionUrl(transition),
    };
  });

  const onButtonClick = (href: string | null) => {
    promiseResolver(href);
  };

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{condition.dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{condition.dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className='flex flex-wrap gap-2'>
          {buttonProps.map(({ href, label }) => {
            return (
              <Button
                size='large'
                variant='contained'
                color='primary'
                onClick={() => onButtonClick(href)}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const Container: FC<Props> = (props) => {
  return (
    <RecoilRoot>
      <Component {...props} />
    </RecoilRoot>
  );
};

export default Container;
