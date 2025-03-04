import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Select from '@/components/atoms/Select';
import Typography from '@/components/atoms/Typography';

interface LabelSelectInputProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  id?: string;
  required?: boolean;
  selectList: string[];
}

const LabelSelectInput = ({
  label,
  id,
  className,
  required,
  selectList,
  ...props
}: LabelSelectInputProps) => {
  return (
    <div className={cn('flex flex-col gap-[5px] w-full', className)} {...props}>
      <label htmlFor={id}>
        <Typography.P1>
          {label} {required && <span>*</span>}
        </Typography.P1>
      </label>

      <Select
        id={id}
        className={cn(
          'w-full focus:border-mos-main-500 focus:outline-none placeholder:text-mos-gray-500'
        )}
      >
        {selectList.map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default LabelSelectInput;
