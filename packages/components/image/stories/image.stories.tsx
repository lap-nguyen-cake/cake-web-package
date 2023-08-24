import React from "react";
import { Meta } from "@storybook/react";
import { image } from "@nextui-org/theme";

import { Image, ImageProps } from "../src";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    shadow: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
    isBlurred: {
      control: {
        type: "boolean",
      },
    },
    isZoomed: {
      control: {
        type: "boolean",
      },
    },
    showSkeleton: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Image>;

const defaultProps = {
  ...image.defaultVariants,
  src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
  alt: "NextUI hero image",
  disableSkeleton: true,
};

const LoadingTemplate = (args: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const time = !args.disableSkeleton ? 2500 : 500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Image {...args} isLoading={isLoading} />;
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const Blurred = {
  args: {
    ...defaultProps,
    isBlurred: true,
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
  },
};

export const Zoomed = {
  args: {
    ...defaultProps,
    isZoomed: true,
    radius: "lg",
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
  },
};

export const Shadow = {
  args: {
    ...defaultProps,
    isZoomed: true,
    radius: "lg",
    shadow: "md",
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
  },
};

export const AnimatedLoad = {
  args: {
    ...defaultProps,
    width: 300,
    radius: "lg",
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
  },
};

export const Fallback = {
  render: LoadingTemplate,

  args: {
    ...defaultProps,
    radius: "lg",
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
    fallbackSrc: "https://via.placeholder.com/300x450",
  },
};

export const Skeleton = {
  render: LoadingTemplate,

  args: {
    ...defaultProps,
    radius: "lg",
    src: "https://storage.googleapis.com/imgcdn.be.com.vn/cake/v1/email_banner/hoangthuylinh_concert.png",
    disableSkeleton: false,
  },
};
