import Link from 'next/link';
import IconSosmed from './sosmed/icon';
import { TSosmed } from '@/interfaces';

type Props = { sosmed: TSosmed[] };
export const SocialMedia = ({ sosmed = [] }: Props) => {
  return (
    <div className="social-media flex items-center gap-6">
      {sosmed.map((sm: Record<string, any>, i) => {
        return (
          <Link
            key={i}
            href={sm.url}
            target="_blank"
            className="tracking-widest bg-transparent relative border-2 border-primary p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:-translate-x-full before:hover:translate-x-0 before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary rounded-full group"
          >
            <IconSosmed icon={`${sm.name.toLowerCase()}`} />
          </Link>
        );
      })}
    </div>
  );
};
export default SocialMedia;
