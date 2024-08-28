/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { capitalizeFirstLetter } from '@/lib/utils';
import { Tags, TagsFields } from '@/types/tags';
import { HeartIcon } from 'lucide-react';

type ToolsModalProps = {
  logo: string;
  name: string;
  homepage: string;
  video: string;
  tags: Tags[];
  numberLikes: number;
  description: string;
};

export default function ToolsModal({
  description,
  homepage,
  logo,
  name,
  numberLikes,
  tags,
  video,
}: ToolsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center p-0 hover:scale-105 transition-transform rounded-md relative w-32 h-32 group"
        >
          <img
            src={logo}
            alt={name}
            className="w-full h-auto rounded-lg aspect-square"
          />
          <img
            src={logo}
            alt={name}
            className="absolute top-0 left-0 blur-xl -z-10 opacity-0 w-full h-auto group-hover:opacity-100 transition-all rounded-lg aspect-square"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl w-11/12 md:w-full">
        <DialogHeader>
          <div className="w-full flex justify-between items-center relative">
            <div className="flex flex-col gap-2 items-center w-full">
              <img
                src={logo}
                alt={name}
                className="w-full h-auto rounded-lg aspect-square max-w-20 md:max-w-32"
              />
              <a
                className="text-2xl md:text-4xl font-bold w-full text-center hover:underline"
                href={homepage}
                target="_blank"
              >
                {name}
              </a>
            </div>
            <Button
              className="flex gap-2 absolute top-0 -right-6 md:right-0"
              variant="ghost"
            >
              {numberLikes}
              <HeartIcon />
            </Button>
          </div>
        </DialogHeader>
        <ScrollArea className="flex flex-col gap-4 py-2 max-h-[23rem] md:max-h-[50vh] h-full">
          <div className="flex flex-col gap-2 pr-4">
            <div
              className="joditBox"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="mt-4 w-full flex justify-center">
            <video
              className="w-full max-w-2xl aspect-video"
              src={video}
              controls
            />
          </div>
        </ScrollArea>
        <DialogFooter>
          <div className="flex justify-between w-full pt-4 border-t-2 border-t-accent">
            <div className="flex md:gap-2 items-start md:items-center flex-col md:flex-row">
              <span className="font-semibold">Tags: </span>
              {tags.map((tag) => (
                <Button key={tag[TagsFields.ID]} variant="ghost">
                  {capitalizeFirstLetter(tag[TagsFields.NAME])}
                </Button>
              ))}
            </div>
            <Button type="submit">Ver cursos</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
