import React from 'react';
import './index.css';
import {Grid, Divider, Segment, Image as ImageComponent, Item} from 'semantic-ui-react'
import TestResultCard from 'component/test-result-card/index.jsx';
class DetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailInfo: {
                "pgbench": {
                    "ro": {
                        "10": {
                            "1": {
                                "std": 397.30643899999995,
                                "metric": 11892.645435,
                                "median": 11892.645435,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744130.123901,
                                        "clients": "1",
                                        "start": 1527744010.089376,
                                        "run": 0,
                                        "threads": "1",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "11495.338996",
                                        "read-only": true
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744497.961157,
                                        "clients": "1",
                                        "start": 1527744377.72603,
                                        "run": 1,
                                        "threads": "1",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "12289.951874",
                                        "read-only": true
                                    }
                                ]
                            },
                            "2": {
                                "std": 252.71243850000064,
                                "metric": 28953.186513499997,
                                "median": 28953.186513499997,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744255.57636,
                                        "clients": "2",
                                        "start": 1527744135.356979,
                                        "run": 0,
                                        "threads": "2",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "28700.474075",
                                        "read-only": true
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744619.115272,
                                        "clients": "2",
                                        "start": 1527744499.091329,
                                        "run": 1,
                                        "threads": "2",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "29205.898952",
                                        "read-only": true
                                    }
                                ]
                            },
                            "4": {
                                "std": 285.0294699999995,
                                "metric": 28795.454019999997,
                                "median": 28795.454019999997,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744376.71256,
                                        "clients": "4",
                                        "start": 1527744256.687497,
                                        "run": 0,
                                        "threads": "4",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "28510.424550",
                                        "read-only": true
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744741.561973,
                                        "clients": "4",
                                        "start": 1527744621.429693,
                                        "run": 1,
                                        "threads": "4",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "29080.483490",
                                        "read-only": true
                                    }
                                ]
                            }
                        }
                    },
                    "rw": {
                        "10": {
                            "1": {
                                "std": 86.91589850000001,
                                "metric": 150.6329775,
                                "median": 150.6329775,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744864.061863,
                                        "clients": "1",
                                        "start": 1527744742.776619,
                                        "run": 0,
                                        "threads": "1",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "63.717079",
                                        "read-only": false
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527745241.364349,
                                        "clients": "1",
                                        "start": 1527745121.106113,
                                        "run": 1,
                                        "threads": "1",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "237.548876",
                                        "read-only": false
                                    }
                                ]
                            },
                            "2": {
                                "std": 4.182392499999992,
                                "metric": 280.8884175,
                                "median": 280.8884175,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527744991.386044,
                                        "clients": "2",
                                        "start": 1527744869.496062,
                                        "run": 0,
                                        "threads": "2",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "276.706025",
                                        "read-only": false
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527745365.458378,
                                        "clients": "2",
                                        "start": 1527745245.387941,
                                        "run": 1,
                                        "threads": "2",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "285.070810",
                                        "read-only": false
                                    }
                                ]
                            },
                            "4": {
                                "std": 15.571989000000002,
                                "metric": 399.858649,
                                "median": 399.858649,
                                "results": [
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527745117.188537,
                                        "clients": "4",
                                        "start": 1527744997.01389,
                                        "run": 0,
                                        "threads": "4",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "384.286660",
                                        "read-only": false
                                    },
                                    {
                                        "latency": -1,
                                        "scale": "10",
                                        "end": 1527745489.95213,
                                        "clients": "4",
                                        "start": 1527745369.876761,
                                        "run": 1,
                                        "threads": "4",
                                        "mode": "simple",
                                        "duration": "120",
                                        "tps": "415.430638",
                                        "read-only": false
                                    }
                                ]
                            }
                        }
                    }
                },
                "postgres": {},
                "results": {
                    "init": 9.83613395690918,
                    "runs": [],
                    "warmup": null
                },
                "collectd": {},
                "meta": {
                    "date": "2018-05-31 05:44:54.000000+00",
                    "uname": "Linux postgresql-gsoc1 4.9.0-6-powerpc64le #1 SMP Debian 4.9.88-1+deb9u1 (2018-05-07) ppc64le GNU/Linux\n",
                    "benchmark": "pgbench",
                    "name": "pgbench-basic"
                },
                "linux": {
                    "mounts": "sysfs /sys sysfs rw,nosuid,nodev,noexec,relatime 0 0\nproc /proc proc rw,nosuid,nodev,noexec,relatime 0 0\nudev /dev devtmpfs rw,nosuid,relatime,size=2076864k,nr_inodes=32451,mode=755 0 0\ndevpts /dev/pts devpts rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000 0 0\ntmpfs /run tmpfs rw,nosuid,noexec,relatime,size=417600k,mode=755 0 0\n/dev/sda2 / ext4 rw,relatime,errors=remount-ro,data=ordered 0 0\nsecurityfs /sys/kernel/security securityfs rw,nosuid,nodev,noexec,relatime 0 0\ntmpfs /dev/shm tmpfs rw,nosuid,nodev 0 0\ntmpfs /run/lock tmpfs rw,nosuid,nodev,noexec,relatime,size=5120k 0 0\ntmpfs /sys/fs/cgroup tmpfs ro,nosuid,nodev,noexec,mode=755 0 0\ncgroup /sys/fs/cgroup/systemd cgroup rw,nosuid,nodev,noexec,relatime,xattr,release_agent=/lib/systemd/systemd-cgroups-agent,name=systemd 0 0\ncgroup /sys/fs/cgroup/memory cgroup rw,nosuid,nodev,noexec,relatime,memory 0 0\ncgroup /sys/fs/cgroup/cpu,cpuacct cgroup rw,nosuid,nodev,noexec,relatime,cpu,cpuacct 0 0\ncgroup /sys/fs/cgroup/cpuset cgroup rw,nosuid,nodev,noexec,relatime,cpuset 0 0\ncgroup /sys/fs/cgroup/net_cls,net_prio cgroup rw,nosuid,nodev,noexec,relatime,net_cls,net_prio 0 0\ncgroup /sys/fs/cgroup/pids cgroup rw,nosuid,nodev,noexec,relatime,pids 0 0\ncgroup /sys/fs/cgroup/perf_event cgroup rw,nosuid,nodev,noexec,relatime,perf_event 0 0\ncgroup /sys/fs/cgroup/freezer cgroup rw,nosuid,nodev,noexec,relatime,freezer 0 0\ncgroup /sys/fs/cgroup/devices cgroup rw,nosuid,nodev,noexec,relatime,devices 0 0\ncgroup /sys/fs/cgroup/blkio cgroup rw,nosuid,nodev,noexec,relatime,blkio 0 0\nsystemd-1 /proc/sys/fs/binfmt_misc autofs rw,relatime,fd=29,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=8487 0 0\nmqueue /dev/mqueue mqueue rw,relatime 0 0\ndebugfs /sys/kernel/debug debugfs rw,relatime 0 0\nbinfmt_misc /proc/sys/fs/binfmt_misc binfmt_misc rw,relatime 0 0\ntmpfs /run/user/1001 tmpfs rw,nosuid,nodev,relatime,size=417536k,mode=700,uid=1001,gid=1001 0 0\n",
                    "cpuinfo": "processor\t: 0\ncpu\t\t: POWER8 (architected), altivec supported\nclock\t\t: 3425.000000MHz\nrevision\t: 2.1 (pvr 004b 0201)\n\nprocessor\t: 1\ncpu\t\t: POWER8 (architected), altivec supported\nclock\t\t: 3425.000000MHz\nrevision\t: 2.1 (pvr 004b 0201)\n\ntimebase\t: 512000000\nplatform\t: pSeries\nmodel\t\t: IBM pSeries (emulated by qemu)\nmachine\t\t: CHRP IBM pSeries (emulated by qemu)\n",
                    "sysctl": "debug.exception-trace = 1\ndev.mac_hid.mouse_button2_keycode = 97\ndev.mac_hid.mouse_button3_keycode = 100\ndev.mac_hid.mouse_button_emulation = 0\ndev.scsi.logging_level = 0\nfs.aio-max-nr = 65536\nfs.aio-nr = 0\nfs.binfmt_misc.status = enabled\nfs.dentry-state = 55628\t46232\t45\t0\t0\t0\nfs.dir-notify-enable = 1\nfs.epoll.max_user_watches = 850657\nfs.file-max = 414118\nfs.file-nr = 736\t0\t414118\nfs.inode-nr = 39189\t291\nfs.inode-state = 39189\t291\t0\t0\t0\t0\t0\nfs.inotify.max_queued_events = 16384\nfs.inotify.max_user_instances = 128\nfs.inotify.max_user_watches = 8192\nfs.lease-break-time = 45\nfs.leases-enable = 1\nfs.mount-max = 100000\nfs.mqueue.msg_default = 10\nfs.mqueue.msg_max = 10\nfs.mqueue.msgsize_default = 8192\nfs.mqueue.msgsize_max = 8192\nfs.mqueue.queues_max = 256\nfs.nr_open = 1048576\nfs.overflowgid = 65534\nfs.overflowuid = 65534\nfs.pipe-max-size = 1048576\nfs.pipe-user-pages-hard = 0\nfs.pipe-user-pages-soft = 16384\nsysctl: permission denied on key 'fs.protected_hardlinks'\nsysctl: permission denied on key 'fs.protected_symlinks'\nfs.quota.allocated_dquots = 0\nfs.quota.cache_hits = 0\nfs.quota.drops = 0\nfs.quota.free_dquots = 0\nfs.quota.lookups = 0\nfs.quota.reads = 0\nfs.quota.syncs = 0\nfs.quota.warnings = 1\nfs.quota.writes = 0\nfs.suid_dumpable = 0\nkernel.acct = 4\t2\t30\nkernel.auto_msgmni = 0\nsysctl: permission denied on key 'kernel.cad_pid'\nkernel.cap_last_cap = 37\nkernel.core_pattern = core\nkernel.core_pipe_limit = 0\nkernel.core_uses_pid = 0\nkernel.ctrl-alt-del = 0\nkernel.dmesg_restrict = 1\nkernel.domainname = (none)\nkernel.ftrace_dump_on_oops = 0\nkernel.ftrace_enabled = 1\nkernel.hardlockup_all_cpu_backtrace = 0\nkernel.hardlockup_panic = 0\nkernel.hostname = postgresql-gsoc1\nkernel.hung_task_check_count = 4194304\nkernel.hung_task_panic = 0\nkernel.hung_task_timeout_secs = 120\nkernel.hung_task_warnings = 10\nkernel.kexec_load_disabled = 0\nkernel.keys.gc_delay = 300\nkernel.keys.maxbytes = 20000\nkernel.keys.maxkeys = 200\nkernel.keys.root_maxbytes = 25000000\nkernel.keys.root_maxkeys = 1000000\nkernel.kptr_restrict = 0\nkernel.max_lock_depth = 1024\nkernel.modprobe = /sbin/modprobe\nkernel.modules_disabled = 0\nkernel.msg_next_id = -1\nkernel.msgmax = 8192\nkernel.msgmnb = 16384\nkernel.msgmni = 32000\nkernel.ngroups_max = 65536\nkernel.nmi_watchdog = 0\nkernel.ns_last_pid = 16106\nkernel.numa_balancing = 0\nkernel.numa_balancing_scan_delay_ms = 1000\nkernel.numa_balancing_scan_period_max_ms = 60000\nkernel.numa_balancing_scan_period_min_ms = 1000\nkernel.numa_balancing_scan_size_mb = 256\nkernel.osrelease = 4.9.0-6-powerpc64le\nkernel.ostype = Linux\nkernel.overflowgid = 65534\nkernel.overflowuid = 65534\nkernel.panic = 0\nkernel.panic_on_oops = 0\nkernel.panic_on_rcu_stall = 0\nkernel.panic_on_warn = 0\nkernel.perf_cpu_time_max_percent = 25\nkernel.perf_event_max_contexts_per_stack = 8\nkernel.perf_event_max_sample_rate = 100000\nkernel.perf_event_max_stack = 127\nkernel.perf_event_mlock_kb = 576\nkernel.perf_event_paranoid = 3\nkernel.pid_max = 32768\nkernel.poweroff_cmd = /sbin/poweroff\nkernel.powersave-nap = 0\nkernel.print-fatal-signals = 0\nkernel.printk = 4\t4\t1\t7\nkernel.printk_delay = 0\nkernel.printk_devkmsg = ratelimit\nkernel.printk_ratelimit = 5\nkernel.printk_ratelimit_burst = 10\nkernel.pty.max = 4096\nkernel.pty.nr = 1\nkernel.pty.reserve = 1024\nkernel.random.boot_id = abb03e17-7d5d-4d71-9e9e-cecfaee3e67a\nkernel.random.entropy_avail = 3789\nkernel.random.poolsize = 4096\nkernel.random.read_wakeup_threshold = 64\nkernel.random.urandom_min_reseed_secs = 60\nkernel.random.uuid = 9f0d7b0c-86e2-46fe-9865-58bf6598b6c6\nkernel.random.write_wakeup_threshold = 896\nkernel.randomize_va_space = 2\nkernel.real-root-dev = 0\nkernel.sched_autogroup_enabled = 0\nkernel.sched_cfs_bandwidth_slice_us = 5000\nkernel.sched_child_runs_first = 0\nkernel.sched_domain.cpu0.domain0.busy_factor = 32\nkernel.sched_domain.cpu0.domain0.busy_idx = 2\nkernel.sched_domain.cpu0.domain0.cache_nice_tries = 1\nkernel.sched_domain.cpu0.domain0.flags = 4143\nkernel.sched_domain.cpu0.domain0.forkexec_idx = 0\nkernel.sched_domain.cpu0.domain0.idle_idx = 1\nkernel.sched_domain.cpu0.domain0.imbalance_pct = 125\nkernel.sched_domain.cpu0.domain0.max_interval = 4\nkernel.sched_domain.cpu0.domain0.max_newidle_lb_cost = 42755\nkernel.sched_domain.cpu0.domain0.min_interval = 2\nkernel.sched_domain.cpu0.domain0.name = DIE\nkernel.sched_domain.cpu0.domain0.newidle_idx = 0\nkernel.sched_domain.cpu0.domain0.wake_idx = 0\nkernel.sched_domain.cpu1.domain0.busy_factor = 32\nkernel.sched_domain.cpu1.domain0.busy_idx = 2\nkernel.sched_domain.cpu1.domain0.cache_nice_tries = 1\nkernel.sched_domain.cpu1.domain0.flags = 4143\nkernel.sched_domain.cpu1.domain0.forkexec_idx = 0\nkernel.sched_domain.cpu1.domain0.idle_idx = 1\nkernel.sched_domain.cpu1.domain0.imbalance_pct = 125\nkernel.sched_domain.cpu1.domain0.max_interval = 4\nkernel.sched_domain.cpu1.domain0.max_newidle_lb_cost = 56605\nkernel.sched_domain.cpu1.domain0.min_interval = 2\nkernel.sched_domain.cpu1.domain0.name = DIE\nkernel.sched_domain.cpu1.domain0.newidle_idx = 0\nkernel.sched_domain.cpu1.domain0.wake_idx = 0\nkernel.sched_latency_ns = 12000000\nkernel.sched_migration_cost_ns = 500000\nkernel.sched_min_granularity_ns = 1500000\nkernel.sched_nr_migrate = 32\nkernel.sched_rr_timeslice_ms = 25\nkernel.sched_rt_period_us = 1000000\nkernel.sched_rt_runtime_us = 950000\nkernel.sched_schedstats = 0\nkernel.sched_shares_window_ns = 10000000\nkernel.sched_time_avg_ms = 1000\nkernel.sched_tunable_scaling = 1\nkernel.sched_wakeup_granularity_ns = 2000000\nkernel.sem = 32000\t1024000000\t500\t32000\nkernel.sem_next_id = -1\nkernel.shm_next_id = -1\nkernel.shm_rmid_forced = 0\nkernel.shmall = 18446744073692774399\nkernel.shmmax = 18446744073692774399\nkernel.shmmni = 4096\nkernel.soft_watchdog = 1\nkernel.softlockup_all_cpu_backtrace = 0\nkernel.softlockup_panic = 0\nkernel.stack_tracer_enabled = 0\nkernel.sysctl_writes_strict = 1\nkernel.sysrq = 438\nkernel.tainted = 0\nkernel.threads-max = 32451\nkernel.timer_migration = 1\nkernel.traceoff_on_warning = 0\nkernel.tracepoint_printk = 0\nkernel.unprivileged_bpf_disabled = 0\nkernel.unprivileged_userns_clone = 0\nsysctl: permission denied on key 'kernel.usermodehelper.bset'\nsysctl: permission denied on key 'kernel.usermodehelper.inheritable'\nkernel.version = #1 SMP Debian 4.9.88-1+deb9u1 (2018-05-07)\nkernel.watchdog = 1\nkernel.watchdog_cpumask = 0-1\nkernel.watchdog_thresh = 10\nkernel.yama.ptrace_scope = 0\nnet.core.bpf_jit_enable = 0\nsysctl: permission denied on key 'net.core.bpf_jit_harden'\nnet.core.busy_poll = 0\nnet.core.busy_read = 0\nnet.core.default_qdisc = pfifo_fast\nnet.core.dev_weight = 64\nnet.core.flow_limit_cpu_bitmap = 0\nnet.core.flow_limit_table_len = 4096\nnet.core.max_skb_frags = 16\nnet.core.message_burst = 10\nnet.core.message_cost = 5\nnet.core.netdev_budget = 300\nnet.core.netdev_max_backlog = 1000\nnet.core.netdev_rss_key = 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00\nnet.core.netdev_tstamp_prequeue = 1\nnet.core.optmem_max = 20480\nnet.core.rmem_default = 229376\nnet.core.rmem_max = 229376\nnet.core.rps_sock_flow_entries = 0\nnet.core.somaxconn = 128\nnet.core.tstamp_allow_data = 1\nnet.core.warnings = 0\nnet.core.wmem_default = 229376\nnet.core.wmem_max = 229376\nnet.core.xfrm_acq_expires = 30\nnet.core.xfrm_aevent_etime = 10\nnet.core.xfrm_aevent_rseqth = 2\nnet.core.xfrm_larval_drop = 1\nnet.ipv4.conf.all.accept_local = 0\nnet.ipv4.conf.all.accept_redirects = 1\nnet.ipv4.conf.all.accept_source_route = 0\nnet.ipv4.conf.all.arp_accept = 0\nnet.ipv4.conf.all.arp_announce = 0\nnet.ipv4.conf.all.arp_filter = 0\nnet.ipv4.conf.all.arp_ignore = 0\nnet.ipv4.conf.all.arp_notify = 0\nnet.ipv4.conf.all.bootp_relay = 0\nnet.ipv4.conf.all.disable_policy = 0\nnet.ipv4.conf.all.disable_xfrm = 0\nnet.ipv4.conf.all.drop_gratuitous_arp = 0\nnet.ipv4.conf.all.drop_unicast_in_l2_multicast = 0\nnet.ipv4.conf.all.force_igmp_version = 0\nnet.ipv4.conf.all.forwarding = 0\nnet.ipv4.conf.all.igmpv2_unsolicited_report_interval = 10000\nnet.ipv4.conf.all.igmpv3_unsolicited_report_interval = 1000\nnet.ipv4.conf.all.ignore_routes_with_linkdown = 0\nnet.ipv4.conf.all.log_martians = 0\nnet.ipv4.conf.all.mc_forwarding = 0\nnet.ipv4.conf.all.medium_id = 0\nnet.ipv4.conf.all.promote_secondaries = 0\nnet.ipv4.conf.all.proxy_arp = 0\nnet.ipv4.conf.all.proxy_arp_pvlan = 0\nnet.ipv4.conf.all.route_localnet = 0\nnet.ipv4.conf.all.rp_filter = 0\nnet.ipv4.conf.all.secure_redirects = 1\nnet.ipv4.conf.all.send_redirects = 1\nnet.ipv4.conf.all.shared_media = 1\nnet.ipv4.conf.all.src_valid_mark = 0\nnet.ipv4.conf.all.tag = 0\nnet.ipv4.conf.default.accept_local = 0\nnet.ipv4.conf.default.accept_redirects = 1\nnet.ipv4.conf.default.accept_source_route = 1\nnet.ipv4.conf.default.arp_accept = 0\nnet.ipv4.conf.default.arp_announce = 0\nnet.ipv4.conf.default.arp_filter = 0\nnet.ipv4.conf.default.arp_ignore = 0\nnet.ipv4.conf.default.arp_notify = 0\nnet.ipv4.conf.default.bootp_relay = 0\nnet.ipv4.conf.default.disable_policy = 0\nnet.ipv4.conf.default.disable_xfrm = 0\nnet.ipv4.conf.default.drop_gratuitous_arp = 0\nnet.ipv4.conf.default.drop_unicast_in_l2_multicast = 0\nnet.ipv4.conf.default.force_igmp_version = 0\nnet.ipv4.conf.default.forwarding = 0\nnet.ipv4.conf.default.igmpv2_unsolicited_report_interval = 10000\nnet.ipv4.conf.default.igmpv3_unsolicited_report_interval = 1000\nnet.ipv4.conf.default.ignore_routes_with_linkdown = 0\nnet.ipv4.conf.default.log_martians = 0\nnet.ipv4.conf.default.mc_forwarding = 0\nnet.ipv4.conf.default.medium_id = 0\nnet.ipv4.conf.default.promote_secondaries = 0\nnet.ipv4.conf.default.proxy_arp = 0\nnet.ipv4.conf.default.proxy_arp_pvlan = 0\nnet.ipv4.conf.default.route_localnet = 0\nnet.ipv4.conf.default.rp_filter = 0\nnet.ipv4.conf.default.secure_redirects = 1\nnet.ipv4.conf.default.send_redirects = 1\nnet.ipv4.conf.default.shared_media = 1\nnet.ipv4.conf.default.src_valid_mark = 0\nnet.ipv4.conf.default.tag = 0\nnet.ipv4.conf.eth0.accept_local = 0\nnet.ipv4.conf.eth0.accept_redirects = 1\nnet.ipv4.conf.eth0.accept_source_route = 1\nnet.ipv4.conf.eth0.arp_accept = 0\nnet.ipv4.conf.eth0.arp_announce = 0\nnet.ipv4.conf.eth0.arp_filter = 0\nnet.ipv4.conf.eth0.arp_ignore = 0\nnet.ipv4.conf.eth0.arp_notify = 0\nnet.ipv4.conf.eth0.bootp_relay = 0\nnet.ipv4.conf.eth0.disable_policy = 0\nnet.ipv4.conf.eth0.disable_xfrm = 0\nnet.ipv4.conf.eth0.drop_gratuitous_arp = 0\nnet.ipv4.conf.eth0.drop_unicast_in_l2_multicast = 0\nnet.ipv4.conf.eth0.force_igmp_version = 0\nnet.ipv4.conf.eth0.forwarding = 0\nnet.ipv4.conf.eth0.igmpv2_unsolicited_report_interval = 10000\nnet.ipv4.conf.eth0.igmpv3_unsolicited_report_interval = 1000\nnet.ipv4.conf.eth0.ignore_routes_with_linkdown = 0\nnet.ipv4.conf.eth0.log_martians = 0\nnet.ipv4.conf.eth0.mc_forwarding = 0\nnet.ipv4.conf.eth0.medium_id = 0\nnet.ipv4.conf.eth0.promote_secondaries = 0\nnet.ipv4.conf.eth0.proxy_arp = 0\nnet.ipv4.conf.eth0.proxy_arp_pvlan = 0\nnet.ipv4.conf.eth0.route_localnet = 0\nnet.ipv4.conf.eth0.rp_filter = 0\nnet.ipv4.conf.eth0.secure_redirects = 1\nnet.ipv4.conf.eth0.send_redirects = 1\nnet.ipv4.conf.eth0.shared_media = 1\nnet.ipv4.conf.eth0.src_valid_mark = 0\nnet.ipv4.conf.eth0.tag = 0\nnet.ipv4.conf.lo.accept_local = 0\nnet.ipv4.conf.lo.accept_redirects = 1\nnet.ipv4.conf.lo.accept_source_route = 1\nnet.ipv4.conf.lo.arp_accept = 0\nnet.ipv4.conf.lo.arp_announce = 0\nnet.ipv4.conf.lo.arp_filter = 0\nnet.ipv4.conf.lo.arp_ignore = 0\nnet.ipv4.conf.lo.arp_notify = 0\nnet.ipv4.conf.lo.bootp_relay = 0\nnet.ipv4.conf.lo.disable_policy = 1\nnet.ipv4.conf.lo.disable_xfrm = 1\nnet.ipv4.conf.lo.drop_gratuitous_arp = 0\nnet.ipv4.conf.lo.drop_unicast_in_l2_multicast = 0\nnet.ipv4.conf.lo.force_igmp_version = 0\nnet.ipv4.conf.lo.forwarding = 0\nnet.ipv4.conf.lo.igmpv2_unsolicited_report_interval = 10000\nnet.ipv4.conf.lo.igmpv3_unsolicited_report_interval = 1000\nnet.ipv4.conf.lo.ignore_routes_with_linkdown = 0\nnet.ipv4.conf.lo.log_martians = 0\nnet.ipv4.conf.lo.mc_forwarding = 0\nnet.ipv4.conf.lo.medium_id = 0\nnet.ipv4.conf.lo.promote_secondaries = 0\nnet.ipv4.conf.lo.proxy_arp = 0\nnet.ipv4.conf.lo.proxy_arp_pvlan = 0\nnet.ipv4.conf.lo.route_localnet = 0\nnet.ipv4.conf.lo.rp_filter = 0\nnet.ipv4.conf.lo.secure_redirects = 1\nnet.ipv4.conf.lo.send_redirects = 1\nnet.ipv4.conf.lo.shared_media = 1\nnet.ipv4.conf.lo.src_valid_mark = 0\nnet.ipv4.conf.lo.tag = 0\nnet.ipv4.fib_multipath_use_neigh = 0\nnet.ipv4.fwmark_reflect = 0\nnet.ipv4.icmp_echo_ignore_all = 0\nnet.ipv4.icmp_echo_ignore_broadcasts = 1\nnet.ipv4.icmp_errors_use_inbound_ifaddr = 0\nnet.ipv4.icmp_ignore_bogus_error_responses = 1\nnet.ipv4.icmp_msgs_burst = 50\nnet.ipv4.icmp_msgs_per_sec = 1000\nnet.ipv4.icmp_ratelimit = 1000\nnet.ipv4.icmp_ratemask = 6168\nnet.ipv4.igmp_link_local_mcast_reports = 1\nnet.ipv4.igmp_max_memberships = 20\nnet.ipv4.igmp_max_msf = 10\nnet.ipv4.igmp_qrv = 2\nnet.ipv4.inet_peer_maxttl = 600\nnet.ipv4.inet_peer_minttl = 120\nnet.ipv4.inet_peer_threshold = 65664\nnet.ipv4.ip_default_ttl = 64\nnet.ipv4.ip_dynaddr = 0\nnet.ipv4.ip_early_demux = 1\nnet.ipv4.ip_forward = 0\nnet.ipv4.ip_forward_use_pmtu = 0\nnet.ipv4.ip_local_port_range = 32768\t60999\nnet.ipv4.ip_local_reserved_ports = \nnet.ipv4.ip_no_pmtu_disc = 0\nnet.ipv4.ip_nonlocal_bind = 0\nnet.ipv4.ipfrag_high_thresh = 4194304\nnet.ipv4.ipfrag_low_thresh = 3145728\nnet.ipv4.ipfrag_max_dist = 64\nnet.ipv4.ipfrag_secret_interval = 0\nnet.ipv4.ipfrag_time = 30\nnet.ipv4.neigh.default.anycast_delay = 100\nnet.ipv4.neigh.default.app_solicit = 0\nnet.ipv4.neigh.default.base_reachable_time_ms = 30000\nnet.ipv4.neigh.default.delay_first_probe_time = 5\nnet.ipv4.neigh.default.gc_interval = 30\nnet.ipv4.neigh.default.gc_stale_time = 60\nnet.ipv4.neigh.default.gc_thresh1 = 128\nnet.ipv4.neigh.default.gc_thresh2 = 512\nnet.ipv4.neigh.default.gc_thresh3 = 1024\nnet.ipv4.neigh.default.locktime = 100\nnet.ipv4.neigh.default.mcast_resolicit = 0\nnet.ipv4.neigh.default.mcast_solicit = 3\nnet.ipv4.neigh.default.proxy_delay = 80\nnet.ipv4.neigh.default.proxy_qlen = 64\nnet.ipv4.neigh.default.retrans_time_ms = 1000\nnet.ipv4.neigh.default.ucast_solicit = 3\nnet.ipv4.neigh.default.unres_qlen = 30\nnet.ipv4.neigh.default.unres_qlen_bytes = 65536\nnet.ipv4.neigh.eth0.anycast_delay = 100\nnet.ipv4.neigh.eth0.app_solicit = 0\nnet.ipv4.neigh.eth0.base_reachable_time_ms = 30000\nnet.ipv4.neigh.eth0.delay_first_probe_time = 5\nnet.ipv4.neigh.eth0.gc_stale_time = 60\nnet.ipv4.neigh.eth0.locktime = 100\nnet.ipv4.neigh.eth0.mcast_resolicit = 0\nnet.ipv4.neigh.eth0.mcast_solicit = 3\nnet.ipv4.neigh.eth0.proxy_delay = 80\nnet.ipv4.neigh.eth0.proxy_qlen = 64\nnet.ipv4.neigh.eth0.retrans_time_ms = 1000\nnet.ipv4.neigh.eth0.ucast_solicit = 3\nnet.ipv4.neigh.eth0.unres_qlen = 30\nnet.ipv4.neigh.eth0.unres_qlen_bytes = 65536\nnet.ipv4.neigh.lo.anycast_delay = 100\nnet.ipv4.neigh.lo.app_solicit = 0\nnet.ipv4.neigh.lo.base_reachable_time_ms = 30000\nnet.ipv4.neigh.lo.delay_first_probe_time = 5\nnet.ipv4.neigh.lo.gc_stale_time = 60\nnet.ipv4.neigh.lo.locktime = 100\nnet.ipv4.neigh.lo.mcast_resolicit = 0\nnet.ipv4.neigh.lo.mcast_solicit = 3\nnet.ipv4.neigh.lo.proxy_delay = 80\nnet.ipv4.neigh.lo.proxy_qlen = 64\nnet.ipv4.neigh.lo.retrans_time_ms = 1000\nnet.ipv4.neigh.lo.ucast_solicit = 3\nnet.ipv4.neigh.lo.unres_qlen = 30\nnet.ipv4.neigh.lo.unres_qlen_bytes = 65536\nnet.ipv4.ping_group_range = 1\t0\nnet.ipv4.route.error_burst = 1250\nnet.ipv4.route.error_cost = 250\nnet.ipv4.route.gc_elasticity = 8\nnet.ipv4.route.gc_interval = 60\nnet.ipv4.route.gc_min_interval = 0\nnet.ipv4.route.gc_min_interval_ms = 500\nnet.ipv4.route.gc_thresh = -1\nnet.ipv4.route.gc_timeout = 300\nnet.ipv4.route.max_size = 2147483647\nnet.ipv4.route.min_adv_mss = 256\nnet.ipv4.route.min_pmtu = 552\nnet.ipv4.route.mtu_expires = 600\nnet.ipv4.route.redirect_load = 5\nnet.ipv4.route.redirect_number = 9\nnet.ipv4.route.redirect_silence = 5120\nnet.ipv4.tcp_abort_on_overflow = 0\nnet.ipv4.tcp_adv_win_scale = 1\nnet.ipv4.tcp_allowed_congestion_control = cubic reno\nnet.ipv4.tcp_app_win = 31\nnet.ipv4.tcp_autocorking = 1\nnet.ipv4.tcp_available_congestion_control = cubic reno\nnet.ipv4.tcp_base_mss = 1024\nnet.ipv4.tcp_challenge_ack_limit = 1000\nnet.ipv4.tcp_congestion_control = cubic\nnet.ipv4.tcp_dsack = 1\nnet.ipv4.tcp_early_retrans = 3\nnet.ipv4.tcp_ecn = 2\nnet.ipv4.tcp_ecn_fallback = 1\nnet.ipv4.tcp_fack = 1\nnet.ipv4.tcp_fastopen = 1\nsysctl: permission denied on key 'net.ipv4.tcp_fastopen_key'\nnet.ipv4.tcp_fin_timeout = 60\nnet.ipv4.tcp_frto = 2\nnet.ipv4.tcp_fwmark_accept = 0\nnet.ipv4.tcp_invalid_ratelimit = 500\nnet.ipv4.tcp_keepalive_intvl = 75\nnet.ipv4.tcp_keepalive_probes = 9\nnet.ipv4.tcp_keepalive_time = 7200\nnet.ipv4.tcp_l3mdev_accept = 0\nnet.ipv4.tcp_limit_output_bytes = 262144\nnet.ipv4.tcp_low_latency = 0\nnet.ipv4.tcp_max_orphans = 16384\nnet.ipv4.tcp_max_reordering = 300\nnet.ipv4.tcp_max_syn_backlog = 128\nnet.ipv4.tcp_max_tw_buckets = 16384\nnet.ipv4.tcp_mem = 3030\t4041\t6060\nnet.ipv4.tcp_min_rtt_wlen = 300\nnet.ipv4.tcp_min_tso_segs = 2\nnet.ipv4.tcp_moderate_rcvbuf = 1\nnet.ipv4.tcp_mtu_probing = 0\nnet.ipv4.tcp_no_metrics_save = 0\nnet.ipv4.tcp_notsent_lowat = 4294967295\nnet.ipv4.tcp_orphan_retries = 0\nnet.ipv4.tcp_pacing_ca_ratio = 120\nnet.ipv4.tcp_pacing_ss_ratio = 200\nnet.ipv4.tcp_probe_interval = 600\nnet.ipv4.tcp_probe_threshold = 8\nnet.ipv4.tcp_recovery = 1\nnet.ipv4.tcp_reordering = 3\nnet.ipv4.tcp_retrans_collapse = 1\nnet.ipv4.tcp_retries1 = 3\nnet.ipv4.tcp_retries2 = 15\nnet.ipv4.tcp_rfc1337 = 0\nnet.ipv4.tcp_rmem = 65536\t87380\t6291456\nnet.ipv4.tcp_sack = 1\nnet.ipv4.tcp_slow_start_after_idle = 1\nnet.ipv4.tcp_stdurg = 0\nnet.ipv4.tcp_syn_retries = 6\nnet.ipv4.tcp_synack_retries = 5\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_thin_dupack = 0\nnet.ipv4.tcp_thin_linear_timeouts = 0\nnet.ipv4.tcp_timestamps = 1\nnet.ipv4.tcp_tso_win_divisor = 3\nnet.ipv4.tcp_tw_recycle = 0\nnet.ipv4.tcp_tw_reuse = 0\nnet.ipv4.tcp_window_scaling = 1\nnet.ipv4.tcp_wmem = 65536\t16384\t4194304\nnet.ipv4.tcp_workaround_signed_windows = 0\nnet.ipv4.udp_mem = 6060\t8082\t12120\nnet.ipv4.udp_rmem_min = 65536\nnet.ipv4.udp_wmem_min = 65536\nnet.ipv4.xfrm4_gc_thresh = 2147483647\nnet.ipv6.anycast_src_echo_reply = 0\nnet.ipv6.auto_flowlabels = 1\nnet.ipv6.bindv6only = 0\nnet.ipv6.conf.all.accept_dad = 1\nnet.ipv6.conf.all.accept_ra = 1\nnet.ipv6.conf.all.accept_ra_defrtr = 1\nnet.ipv6.conf.all.accept_ra_from_local = 0\nnet.ipv6.conf.all.accept_ra_min_hop_limit = 1\nnet.ipv6.conf.all.accept_ra_mtu = 1\nnet.ipv6.conf.all.accept_ra_pinfo = 1\nnet.ipv6.conf.all.accept_ra_rt_info_max_plen = 0\nnet.ipv6.conf.all.accept_ra_rtr_pref = 1\nnet.ipv6.conf.all.accept_redirects = 1\nnet.ipv6.conf.all.accept_source_route = 0\nnet.ipv6.conf.all.autoconf = 1\nnet.ipv6.conf.all.dad_transmits = 1\nnet.ipv6.conf.all.disable_ipv6 = 0\nnet.ipv6.conf.all.drop_unicast_in_l2_multicast = 0\nnet.ipv6.conf.all.drop_unsolicited_na = 0\nnet.ipv6.conf.all.force_mld_version = 0\nnet.ipv6.conf.all.force_tllao = 0\nnet.ipv6.conf.all.forwarding = 0\nnet.ipv6.conf.all.hop_limit = 64\nnet.ipv6.conf.all.ignore_routes_with_linkdown = 0\nnet.ipv6.conf.all.keep_addr_on_down = 0\nnet.ipv6.conf.all.max_addresses = 16\nnet.ipv6.conf.all.max_desync_factor = 600\nnet.ipv6.conf.all.mc_forwarding = 0\nnet.ipv6.conf.all.mldv1_unsolicited_report_interval = 10000\nnet.ipv6.conf.all.mldv2_unsolicited_report_interval = 1000\nnet.ipv6.conf.all.mtu = 1280\nnet.ipv6.conf.all.ndisc_notify = 0\nnet.ipv6.conf.all.optimistic_dad = 0\nnet.ipv6.conf.all.proxy_ndp = 0\nnet.ipv6.conf.all.regen_max_retry = 3\nnet.ipv6.conf.all.router_probe_interval = 60\nnet.ipv6.conf.all.router_solicitation_delay = 1\nnet.ipv6.conf.all.router_solicitation_interval = 4\nnet.ipv6.conf.all.router_solicitation_max_interval = 3600\nnet.ipv6.conf.all.router_solicitations = -1\nsysctl: permission denied on key 'net.ipv6.conf.all.stable_secret'\nnet.ipv6.conf.all.suppress_frag_ndisc = 1\nnet.ipv6.conf.all.temp_prefered_lft = 86400\nnet.ipv6.conf.all.temp_valid_lft = 604800\nnet.ipv6.conf.all.use_oif_addrs_only = 0\nnet.ipv6.conf.all.use_optimistic = 0\nnet.ipv6.conf.all.use_tempaddr = 0\nnet.ipv6.conf.default.accept_dad = 1\nnet.ipv6.conf.default.accept_ra = 1\nnet.ipv6.conf.default.accept_ra_defrtr = 1\nnet.ipv6.conf.default.accept_ra_from_local = 0\nnet.ipv6.conf.default.accept_ra_min_hop_limit = 1\nnet.ipv6.conf.default.accept_ra_mtu = 1\nnet.ipv6.conf.default.accept_ra_pinfo = 1\nnet.ipv6.conf.default.accept_ra_rt_info_max_plen = 0\nnet.ipv6.conf.default.accept_ra_rtr_pref = 1\nnet.ipv6.conf.default.accept_redirects = 1\nnet.ipv6.conf.default.accept_source_route = 0\nnet.ipv6.conf.default.autoconf = 1\nnet.ipv6.conf.default.dad_transmits = 1\nnet.ipv6.conf.default.disable_ipv6 = 0\nnet.ipv6.conf.default.drop_unicast_in_l2_multicast = 0\nnet.ipv6.conf.default.drop_unsolicited_na = 0\nnet.ipv6.conf.default.force_mld_version = 0\nnet.ipv6.conf.default.force_tllao = 0\nnet.ipv6.conf.default.forwarding = 0\nnet.ipv6.conf.default.hop_limit = 64\nnet.ipv6.conf.default.ignore_routes_with_linkdown = 0\nnet.ipv6.conf.default.keep_addr_on_down = 0\nnet.ipv6.conf.default.max_addresses = 16\nnet.ipv6.conf.default.max_desync_factor = 600\nnet.ipv6.conf.default.mc_forwarding = 0\nnet.ipv6.conf.default.mldv1_unsolicited_report_interval = 10000\nnet.ipv6.conf.default.mldv2_unsolicited_report_interval = 1000\nnet.ipv6.conf.default.mtu = 1280\nnet.ipv6.conf.default.ndisc_notify = 0\nnet.ipv6.conf.default.optimistic_dad = 0\nnet.ipv6.conf.default.proxy_ndp = 0\nnet.ipv6.conf.default.regen_max_retry = 3\nnet.ipv6.conf.default.router_probe_interval = 60\nnet.ipv6.conf.default.router_solicitation_delay = 1\nnet.ipv6.conf.default.router_solicitation_interval = 4\nnet.ipv6.conf.default.router_solicitation_max_interval = 3600\nnet.ipv6.conf.default.router_solicitations = -1\nsysctl: permission denied on key 'net.ipv6.conf.default.stable_secret'\nnet.ipv6.conf.default.suppress_frag_ndisc = 1\nnet.ipv6.conf.default.temp_prefered_lft = 86400\nnet.ipv6.conf.default.temp_valid_lft = 604800\nnet.ipv6.conf.default.use_oif_addrs_only = 0\nnet.ipv6.conf.default.use_optimistic = 0\nnet.ipv6.conf.default.use_tempaddr = 0\nnet.ipv6.conf.eth0.accept_dad = 1\nnet.ipv6.conf.eth0.accept_ra = 1\nnet.ipv6.conf.eth0.accept_ra_defrtr = 1\nnet.ipv6.conf.eth0.accept_ra_from_local = 0\nnet.ipv6.conf.eth0.accept_ra_min_hop_limit = 1\nnet.ipv6.conf.eth0.accept_ra_mtu = 1\nnet.ipv6.conf.eth0.accept_ra_pinfo = 1\nnet.ipv6.conf.eth0.accept_ra_rt_info_max_plen = 0\nnet.ipv6.conf.eth0.accept_ra_rtr_pref = 1\nnet.ipv6.conf.eth0.accept_redirects = 1\nnet.ipv6.conf.eth0.accept_source_route = 0\nnet.ipv6.conf.eth0.autoconf = 1\nnet.ipv6.conf.eth0.dad_transmits = 1\nnet.ipv6.conf.eth0.disable_ipv6 = 0\nnet.ipv6.conf.eth0.drop_unicast_in_l2_multicast = 0\nnet.ipv6.conf.eth0.drop_unsolicited_na = 0\nnet.ipv6.conf.eth0.force_mld_version = 0\nnet.ipv6.conf.eth0.force_tllao = 0\nnet.ipv6.conf.eth0.forwarding = 0\nnet.ipv6.conf.eth0.hop_limit = 64\nnet.ipv6.conf.eth0.ignore_routes_with_linkdown = 0\nnet.ipv6.conf.eth0.keep_addr_on_down = 0\nnet.ipv6.conf.eth0.max_addresses = 16\nnet.ipv6.conf.eth0.max_desync_factor = 600\nnet.ipv6.conf.eth0.mc_forwarding = 0\nnet.ipv6.conf.eth0.mldv1_unsolicited_report_interval = 10000\nnet.ipv6.conf.eth0.mldv2_unsolicited_report_interval = 1000\nnet.ipv6.conf.eth0.mtu = 1500\nnet.ipv6.conf.eth0.ndisc_notify = 0\nnet.ipv6.conf.eth0.optimistic_dad = 0\nnet.ipv6.conf.eth0.proxy_ndp = 0\nnet.ipv6.conf.eth0.regen_max_retry = 3\nnet.ipv6.conf.eth0.router_probe_interval = 60\nnet.ipv6.conf.eth0.router_solicitation_delay = 1\nnet.ipv6.conf.eth0.router_solicitation_interval = 4\nnet.ipv6.conf.eth0.router_solicitation_max_interval = 3600\nnet.ipv6.conf.eth0.router_solicitations = -1\nsysctl: permission denied on key 'net.ipv6.conf.eth0.stable_secret'\nnet.ipv6.conf.eth0.suppress_frag_ndisc = 1\nnet.ipv6.conf.eth0.temp_prefered_lft = 86400\nnet.ipv6.conf.eth0.temp_valid_lft = 604800\nnet.ipv6.conf.eth0.use_oif_addrs_only = 0\nnet.ipv6.conf.eth0.use_optimistic = 0\nnet.ipv6.conf.eth0.use_tempaddr = 0\nnet.ipv6.conf.lo.accept_dad = -1\nnet.ipv6.conf.lo.accept_ra = 1\nnet.ipv6.conf.lo.accept_ra_defrtr = 1\nnet.ipv6.conf.lo.accept_ra_from_local = 0\nnet.ipv6.conf.lo.accept_ra_min_hop_limit = 1\nnet.ipv6.conf.lo.accept_ra_mtu = 1\nnet.ipv6.conf.lo.accept_ra_pinfo = 1\nnet.ipv6.conf.lo.accept_ra_rt_info_max_plen = 0\nnet.ipv6.conf.lo.accept_ra_rtr_pref = 1\nnet.ipv6.conf.lo.accept_redirects = 1\nnet.ipv6.conf.lo.accept_source_route = 0\nnet.ipv6.conf.lo.autoconf = 1\nnet.ipv6.conf.lo.dad_transmits = 1\nnet.ipv6.conf.lo.disable_ipv6 = 0\nnet.ipv6.conf.lo.drop_unicast_in_l2_multicast = 0\nnet.ipv6.conf.lo.drop_unsolicited_na = 0\nnet.ipv6.conf.lo.force_mld_version = 0\nnet.ipv6.conf.lo.force_tllao = 0\nnet.ipv6.conf.lo.forwarding = 0\nnet.ipv6.conf.lo.hop_limit = 64\nnet.ipv6.conf.lo.ignore_routes_with_linkdown = 0\nnet.ipv6.conf.lo.keep_addr_on_down = 0\nnet.ipv6.conf.lo.max_addresses = 16\nnet.ipv6.conf.lo.max_desync_factor = 600\nnet.ipv6.conf.lo.mc_forwarding = 0\nnet.ipv6.conf.lo.mldv1_unsolicited_report_interval = 10000\nnet.ipv6.conf.lo.mldv2_unsolicited_report_interval = 1000\nnet.ipv6.conf.lo.mtu = 65536\nnet.ipv6.conf.lo.ndisc_notify = 0\nnet.ipv6.conf.lo.optimistic_dad = 0\nnet.ipv6.conf.lo.proxy_ndp = 0\nnet.ipv6.conf.lo.regen_max_retry = 3\nnet.ipv6.conf.lo.router_probe_interval = 60\nnet.ipv6.conf.lo.router_solicitation_delay = 1\nnet.ipv6.conf.lo.router_solicitation_interval = 4\nnet.ipv6.conf.lo.router_solicitation_max_interval = 3600\nnet.ipv6.conf.lo.router_solicitations = -1\nsysctl: permission denied on key 'net.ipv6.conf.lo.stable_secret'\nnet.ipv6.conf.lo.suppress_frag_ndisc = 1\nnet.ipv6.conf.lo.temp_prefered_lft = 86400\nnet.ipv6.conf.lo.temp_valid_lft = 604800\nnet.ipv6.conf.lo.use_oif_addrs_only = 0\nnet.ipv6.conf.lo.use_optimistic = 0\nnet.ipv6.conf.lo.use_tempaddr = -1\nnet.ipv6.flowlabel_consistency = 1\nnet.ipv6.flowlabel_state_ranges = 0\nnet.ipv6.fwmark_reflect = 0\nnet.ipv6.icmp.ratelimit = 1000\nnet.ipv6.idgen_delay = 1\nnet.ipv6.idgen_retries = 3\nnet.ipv6.ip6frag_high_thresh = 4194304\nnet.ipv6.ip6frag_low_thresh = 3145728\nnet.ipv6.ip6frag_secret_interval = 0\nnet.ipv6.ip6frag_time = 60\nnet.ipv6.ip_nonlocal_bind = 0\nnet.ipv6.mld_max_msf = 64\nnet.ipv6.mld_qrv = 2\nnet.ipv6.neigh.default.anycast_delay = 100\nnet.ipv6.neigh.default.app_solicit = 0\nnet.ipv6.neigh.default.base_reachable_time_ms = 30000\nnet.ipv6.neigh.default.delay_first_probe_time = 5\nnet.ipv6.neigh.default.gc_interval = 30\nnet.ipv6.neigh.default.gc_stale_time = 60\nnet.ipv6.neigh.default.gc_thresh1 = 128\nnet.ipv6.neigh.default.gc_thresh2 = 512\nnet.ipv6.neigh.default.gc_thresh3 = 1024\nnet.ipv6.neigh.default.locktime = 0\nnet.ipv6.neigh.default.mcast_resolicit = 0\nnet.ipv6.neigh.default.mcast_solicit = 3\nnet.ipv6.neigh.default.proxy_delay = 80\nnet.ipv6.neigh.default.proxy_qlen = 64\nnet.ipv6.neigh.default.retrans_time_ms = 1000\nnet.ipv6.neigh.default.ucast_solicit = 3\nnet.ipv6.neigh.default.unres_qlen = 30\nnet.ipv6.neigh.default.unres_qlen_bytes = 65536\nnet.ipv6.neigh.eth0.anycast_delay = 100\nnet.ipv6.neigh.eth0.app_solicit = 0\nnet.ipv6.neigh.eth0.base_reachable_time_ms = 30000\nnet.ipv6.neigh.eth0.delay_first_probe_time = 5\nnet.ipv6.neigh.eth0.gc_stale_time = 60\nnet.ipv6.neigh.eth0.locktime = 0\nnet.ipv6.neigh.eth0.mcast_resolicit = 0\nnet.ipv6.neigh.eth0.mcast_solicit = 3\nnet.ipv6.neigh.eth0.proxy_delay = 80\nnet.ipv6.neigh.eth0.proxy_qlen = 64\nnet.ipv6.neigh.eth0.retrans_time_ms = 1000\nnet.ipv6.neigh.eth0.ucast_solicit = 3\nnet.ipv6.neigh.eth0.unres_qlen = 30\nnet.ipv6.neigh.eth0.unres_qlen_bytes = 65536\nnet.ipv6.neigh.lo.anycast_delay = 100\nnet.ipv6.neigh.lo.app_solicit = 0\nnet.ipv6.neigh.lo.base_reachable_time_ms = 30000\nnet.ipv6.neigh.lo.delay_first_probe_time = 5\nnet.ipv6.neigh.lo.gc_stale_time = 60\nnet.ipv6.neigh.lo.locktime = 0\nnet.ipv6.neigh.lo.mcast_resolicit = 0\nnet.ipv6.neigh.lo.mcast_solicit = 3\nnet.ipv6.neigh.lo.proxy_delay = 80\nnet.ipv6.neigh.lo.proxy_qlen = 64\nnet.ipv6.neigh.lo.retrans_time_ms = 1000\nnet.ipv6.neigh.lo.ucast_solicit = 3\nnet.ipv6.neigh.lo.unres_qlen = 30\nnet.ipv6.neigh.lo.unres_qlen_bytes = 65536\nnet.ipv6.route.gc_elasticity = 9\nnet.ipv6.route.gc_interval = 30\nnet.ipv6.route.gc_min_interval = 0\nnet.ipv6.route.gc_min_interval_ms = 500\nnet.ipv6.route.gc_thresh = 1024\nnet.ipv6.route.gc_timeout = 60\nnet.ipv6.route.max_size = 4096\nnet.ipv6.route.min_adv_mss = 1220\nnet.ipv6.route.mtu_expires = 600\nnet.ipv6.xfrm6_gc_thresh = 2147483647\nnet.netfilter.nf_log.0 = NONE\nnet.netfilter.nf_log.1 = NONE\nnet.netfilter.nf_log.10 = NONE\nnet.netfilter.nf_log.11 = NONE\nnet.netfilter.nf_log.12 = NONE\nnet.netfilter.nf_log.2 = NONE\nnet.netfilter.nf_log.3 = NONE\nnet.netfilter.nf_log.4 = NONE\nnet.netfilter.nf_log.5 = NONE\nnet.netfilter.nf_log.6 = NONE\nnet.netfilter.nf_log.7 = NONE\nnet.netfilter.nf_log.8 = NONE\nnet.netfilter.nf_log.9 = NONE\nnet.unix.max_dgram_qlen = 512\nuser.max_cgroup_namespaces = 16225\nuser.max_ipc_namespaces = 16225\nuser.max_mnt_namespaces = 16225\nuser.max_net_namespaces = 16225\nuser.max_pid_namespaces = 16225\nuser.max_user_namespaces = 16225\nuser.max_uts_namespaces = 16225\nvm.admin_reserve_kbytes = 8192\nvm.block_dump = 0\nvm.compact_unevictable_allowed = 1\nvm.dirty_background_bytes = 0\nvm.dirty_background_ratio = 10\nvm.dirty_bytes = 0\nvm.dirty_expire_centisecs = 3000\nvm.dirty_ratio = 20\nvm.dirty_writeback_centisecs = 500\nvm.dirtytime_expire_seconds = 43200\nvm.drop_caches = 0\nvm.extfrag_threshold = 500\nvm.hugepages_treat_as_movable = 0\nvm.hugetlb_shm_group = 0\nvm.laptop_mode = 0\nvm.legacy_va_layout = 0\nvm.lowmem_reserve_ratio = 256\t256\t32\nvm.max_map_count = 65530\nvm.memory_failure_early_kill = 0\nvm.memory_failure_recovery = 1\nvm.min_free_kbytes = 8152\nvm.min_slab_ratio = 5\nvm.min_unmapped_ratio = 1\nvm.mmap_min_addr = 4096\nsysctl: reading key \"vm.nr_hugepages\"\nsysctl: reading key \"vm.nr_hugepages_mempolicy\"\nsysctl: reading key \"vm.nr_overcommit_hugepages\"\nvm.nr_pdflush_threads = 0\nvm.numa_zonelist_order = default\nvm.oom_dump_tasks = 1\nvm.oom_kill_allocating_task = 0\nvm.overcommit_kbytes = 0\nvm.overcommit_memory = 0\nvm.overcommit_ratio = 50\nvm.page-cluster = 3\nvm.panic_on_oom = 0\nvm.percpu_pagelist_fraction = 0\nvm.stat_interval = 1\nsysctl: permission denied on key 'vm.stat_refresh'\nvm.swappiness = 60\nvm.user_reserve_kbytes = 129404\nvm.vfs_cache_pressure = 100\nvm.watermark_scale_factor = 10\nvm.zone_reclaim_mode = 0\n",
                    "meminfo": "MemTotal:        4175424 kB\nMemFree:         2699840 kB\nMemAvailable:    3898816 kB\nBuffers:          107968 kB\nCached:          1146688 kB\nSwapCached:            0 kB\nActive:           764288 kB\nInactive:         587008 kB\nActive(anon):     100800 kB\nInactive(anon):    76928 kB\nActive(file):     663488 kB\nInactive(file):   510080 kB\nUnevictable:           0 kB\nMlocked:               0 kB\nSwapTotal:             0 kB\nSwapFree:              0 kB\nDirty:              1856 kB\nWriteback:             0 kB\nAnonPages:         95744 kB\nMapped:            45248 kB\nShmem:             81152 kB\nSlab:              97792 kB\nSReclaimable:      66176 kB\nSUnreclaim:        31616 kB\nKernelStack:        1488 kB\nPageTables:         2048 kB\nNFS_Unstable:          0 kB\nBounce:                0 kB\nWritebackTmp:          0 kB\nCommitLimit:     2087680 kB\nCommitted_AS:     416448 kB\nVmallocTotal:   8589934592 kB\nVmallocUsed:           0 kB\nVmallocChunk:          0 kB\nHardwareCorrupted:     0 kB\nAnonHugePages:         0 kB\nShmemHugePages:        0 kB\nShmemPmdMapped:        0 kB\nCmaTotal:              0 kB\nCmaFree:               0 kB\n"
                }
            },

        }

        // this.onPageChange = this.onPageChange.bind(this);
        // this.handleIsLoading = this.handleIsLoading.bind(this);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="container row">
                    <div className="col-md-12">
                        <div className="col-md-2">
                            <TestResultCard />
                        </div>

                        <div className="col-md-10">
                            {/*<div className="card-container row">*/}
                            <div className="card-container col-md-11 col-md-offset-1">
                                <div className="col-md-5 card-div">
                                    <TestResultCard />
                                </div>

                                <div className="col-md-5 card-div">
                                    <TestResultCard />
                                </div>
                            </div>

                            <div className="info-container col-md-9 col-md-offset-1">
                                {/*<Segment>*/}
                                <Divider/>
                                <Divider horizontal>Horizontal</Divider>
                                {/*</Segment>*/}

                                <div>
                                    <h2><a href="#linuxInfo">Linux Info</a></h2>
                                    <div className="" data-example-id="">
                                        <dl>
                                            <dt><a href="#">Description lists</a></dt>
                                            <dd>A description list is perfect for defining terms.</dd>
                                            <dt>Euismod</dt>
                                            <dd>
                                            </dd>
                                            <dd></dd>
                                            <dt>Malesuada porta</dt>
                                            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                        </dl>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/*<div className="ui card">*/}
                {/*<div class="content">*/}
                {/*<div class="header">Project Timeline</div>*/}
                {/*</div>*/}
                {/*<div class="content">*/}
                {/*<h4 class="ui sub header">活动</h4>*/}
                {/*<div class="ui small feed">*/}
                {/*<div class="event">*/}
                {/*<div class="content">*/}
                {/*<div class="summary"><a>Elliot Fu</a> added <a>Jenny Hess</a> to the project </div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div class="event">*/}
                {/*<div class="content">*/}
                {/*<div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div class="event">*/}
                {/*<div class="content">*/}
                {/*<div class="summary"><a>Helen Troy</a> added two pictures </div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div class="extra content">*/}
                {/*<button class="ui button">Join Project</button>*/}
                {/*</div>*/}
                {/*</div>*/}

            </div>
        )
    }
}

export default DetailInfo;