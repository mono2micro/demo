### Sync Repos

```bash
git clone https://github.com/redhat-cop/casl-ansible
git clone https://github.com/mono2micro/demo
```

### Launch Demo

```bash
oc login https://<your_ocp_cluster>/
ansible-playbook -i demo/inventory casl-ansible/playbooks/openshift-cluster-seed.yml
```

### Cleanup (TODO: make better)
```bash 
for i in micro-pipeline micro-dev micro-test micro-uat; do oc delete -n coolstore-$i all --all; oc delete project coolstore-$i; done
```
