import React from 'react';

import HeaderClient from '@/components/HeaderClient';
import { getTagsWithCount } from '@/helpers/file-helpers';

async function Header() {
  const tags = await getTagsWithCount();

  return <HeaderClient tags={tags} />;
}

export default Header;
