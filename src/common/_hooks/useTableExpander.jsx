import React, { useState } from 'react';

export default function useTableExpander() {
  const [expanded, setExpanded] = useState([]);

  const editExpanded = (item) => {
    const isExpand = expanded.includes(item);
    const expandList = isExpand ? expanded.filter((exp) => exp !== item) : [...expanded, item];
    setExpanded(expandList);
  };

  const reset = () => setExpanded([]);

  return { expanded, editExpanded, reset };
}
