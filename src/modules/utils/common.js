/**
 * convert a string to html element id.
 * Example: "hello world" => "hello-world"
 * @param id
 */
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const convertToElId = (id) => id.replace(/[^\dA-Za-z]/g, '-').toLowerCase();

const classNames = (...agr) => twMerge(clsx(...agr));

export default {
  classNames,
};
