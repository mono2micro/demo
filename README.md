### Sync Repos

```bash
git clone https://github.com/mono2micro/casl-ansible
git clone https://github.com/mono2micro/demo
```

### Pre-Demo Steps
* Review/edit file templates/projectrequest/rolebindings.yml, make sure your username is listed, and optionally grant additional users access to the demo enviornment.

### Launch Demo

```bash
oc login https://<your_ocp_cluster>/
ansible-playbook -i demo/inventory casl-ansible/playbooks/openshift-cluster-seed.yml
```

### Cleanup (TODO: make better)
```bash 
for i in micro-pipeline micro-dev micro-test micro-uat mono; do oc delete -n coolstore-$i all --all; oc delete project coolstore-$i; done
```
Note: OpenShift continues to clean up after the delete commands complete. If you get an error when attempting to redeploy; you may need to wait a few more minutes for the cleanup to complete.
