import Action from './action';
export default function createErrorAction<TPayload, TMeta, TType extends string>(type: TType, payload?: TPayload, meta?: TMeta): Action<TPayload, TMeta, TType>;
