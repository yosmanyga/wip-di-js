# Using Dispatcher

This pattern is needed from the controllers

```text
constructor(
    private dispatcher: Dispatcher
) {
    this.dispatcher.register('remote_query_retrieved', this.listen)
}

this.dispatcher.retrieve<ListenToRetrieveRemoteQueryType>('remote_query_retrieved').map(service => service.listen(
    query
))
```

# Using multi inject

decorate(multiInject(AbstractListenToRetrieveRemoteQuery), RetrieveRemoteQueries, 1);

After multi inject, register the services within the dispatcher.

```text
constructor(
    private dispatcher: Dispatcher,
    private listenToRetrieveRemoteQueryServices: Array<ListenToRetrieveRemoteQuery>
) {
    for (const service of this.listenToRetrieveRemoteQueryServices) {
        await this.dispatcher.register(
            'remote_query_retrieved', 
            service.listen
        );
    }
}
```

Call all services.

```text
for (const service of this.dispatcher.retrieve<(
    query: RemoteQueryType
) => Promise<void>>('remote_query_retrieved')) {
    await service(
        query
    )
}
```