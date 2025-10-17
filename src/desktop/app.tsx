import { DialogHeader } from '@/components/ui/dialog';
import { getTransitionUrl } from '@/lib/plugin';
import { PluginCondition } from '@/schema/plugin-config';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  condition: PluginCondition;
  promiseResolver: (value: string | null) => void;
  promiseRejecter: (reason: any) => void;
};

const Component: FC<Props> = (props) => {
  const [open, setOpen] = React.useState(true);
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
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogHeader>
        <DialogTitle>{condition.dialogTitle}</DialogTitle>
      </DialogHeader>
      <DialogContent className='🐸'>
        <p className='rad:mb-8'>{condition.dialogDescription}</p>
        <div className='rad:flex rad:flex-wrap rad:gap-2'>
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
      </DialogContent>
    </Dialog>
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
