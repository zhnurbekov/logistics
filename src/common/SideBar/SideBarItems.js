import React from 'react';
import paths from '../../_helpers/paths';
import OrdersIcon from '../../media/Icons/OrdersIcon';
import CargoIcon from '../../media/Icons/CargoIcon';
import PortIcon from '../../media/Icons/PortIcon';
import UserIcon from '../../media/Icons/UserIcon';
import OrganizationIcon from '../../media/Icons/OrganizationIcon';
import DocumentsIcon from '../../media/Icons/DocumentsIcon';
import AnswersIcon from '../../media/Icons/AnswersIcon';
import PrivacyPolicyIcon from '../../media/Icons/PrivacyPolicyIcon';
import UpdateHistoryIcon from '../../media/Icons/UpdateHistoryIcon';

export const sideBarItems = [
  [
    {
      text: 'Все заказы',
      icon: <OrdersIcon />,
      to: paths.orders,
    },
    {
      text: 'Все грузы',
      icon: <CargoIcon />,
      to: paths.cargo,
    },
    {
      text: 'Порты',
      icon: <PortIcon />,
      to: paths.ports,
    },
    {
      text: 'Пользователи',
      icon: <UserIcon />,
      to: paths.users,
    },
  ],
  [
    {
      text: 'Все Организации',
      icon: <OrganizationIcon />,
      to: paths.organizations,
    },
    {
      text: 'Все документы',
      icon: <DocumentsIcon />,
      to: paths.documents,
    },
  ],
  [
    {
      text: 'Вопрос-ответ',
      icon: <AnswersIcon />,
      to: paths.answers,
    },
    {
      text: 'Политика конфиденциальности',
      icon: <PrivacyPolicyIcon />,
      to: paths.privacyPolicy,
    },
    {
      text: 'История обновлений',
      icon: <UpdateHistoryIcon />,
      to: paths.updateHistory,
    },
  ],
];
